import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, X, Navigation, MapIcon, List, Sun, Moon } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Switch } from '../components/ui/switch';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Map, Marker } from 'pigeon-maps';
import { locations, getMarkerColor, type Location } from '../data/map';

interface WebPageProps {
  t: (key: string) => string;
  language: 'ru' | 'en' | 'az';
}

const openMapsApp = (lat: number, lng: number, locationName: string) => {
  // Определяем устройство пользователя
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);
  
  if (isIOS) {
    // Для iOS пробуем открыть Apple Maps
    const appleMapsUrl = `http://maps.apple.com/?daddr=${lat},${lng}&q=${encodeURIComponent(locationName)}`;
    window.location.href = appleMapsUrl;
  } else if (isAndroid) {
    // Для Android используем geo: URI для открытия Google Maps
    const googleMapsUrl = `geo:${lat},${lng}?q=${lat},${lng}(${encodeURIComponent(locationName)})`;
    window.location.href = googleMapsUrl;
  } else {
    // Для десктопа открываем Google Maps в браузере
    const webMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${encodeURIComponent(locationName)}`;
    window.open(webMapsUrl, '_blank');
  }
};

export function WebPage({ t, language }: WebPageProps) {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([40.3850, 49.8350]);
  const [zoom, setZoom] = useState(12.5);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [mapFilter, setMapFilter] = useState<'all' | 'pickup' | 'return'>('all');
  const [isDarkMap, setIsDarkMap] = useState(true);
  const [showOtherIcons, setShowOtherIcons] = useState(false); // По умолчанию выключено

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
    if (viewMode === 'map') {
      setMapCenter([location.lat, location.lng]);
      setZoom(15);
    }
  };

  const getStatusText = (location: Location) => {
    if (location.closed) {
      return language === 'ru' ? 'Закрыто' : language === 'en' ? 'Closed' : 'Bağlıdır';
    }
    if (location.available > 0 && location.returnable > 0) {
      return language === 'ru' ? 'Можно забрать и вернуть' : language === 'en' ? 'Can pick up & return' : 'Götürmək və qaytarmaq olar';
    }
    if (location.available > 0) {
      return language === 'ru' ? 'Можно только забрать' : language === 'en' ? 'Pick up only' : 'Yalnız götürmək olar';
    }
    return language === 'ru' ? 'Можно только вернуть' : language === 'en' ? 'Return only' : 'Yalnız qaytarmaq olar';
  };

  const getFilteredLocations = () => {
    if (mapFilter === 'all') return locations;
    if (mapFilter === 'pickup') return locations.filter(loc => !loc.closed && loc.available > 0);
    if (mapFilter === 'return') return locations.filter(loc => !loc.closed && loc.returnable > 0);
    return locations;
  };

  return (
    <div className="min-h-screen pt-20 pb-16" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          {/* Creative Title with Lightning Icon */}
          <div className="flex items-center justify-center gap-3 mb-4">
            {/* Animated Lightning Icon - Left */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Zap 
                className="w-8 h-8 md:w-10 md:h-10" 
                style={{
                  color: '#facc15',
                  fill: '#facc15',
                  filter: 'drop-shadow(0 0 20px rgba(250, 204, 21, 0.8)) drop-shadow(0 0 40px rgba(250, 204, 21, 0.4))'
                }}
              />
            </motion.div>

            {/* Title with Gradient and Glow */}
            <motion.h1 
              className="relative"
              style={{
                background: 'linear-gradient(90deg, #facc15 0%, #fbbf24 50%, #facc15 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(250, 204, 21, 0.5))'
              }}
              animate={{
                backgroundPosition: ['0% center', '200% center', '0% center']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {t('webTitle')}
            </motion.h1>

            {/* Animated Lightning Icon - Right */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Zap 
                className="w-8 h-8 md:w-10 md:h-10" 
                style={{
                  color: '#facc15',
                  fill: '#facc15',
                  filter: 'drop-shadow(0 0 20px rgba(250, 204, 21, 0.8)) drop-shadow(0 0 40px rgba(250, 204, 21, 0.4))'
                }}
              />
            </motion.div>
          </div>

          <p className="text-white/70 max-w-2xl mx-auto">
            {t('webSubtitle')}
          </p>
        </motion.div>

        {/* Controls: Theme Switcher (left) + View Mode (center) + Filters (right) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6 max-w-7xl mx-auto"
        >
          {/* Map Theme Switcher & Icons Toggle - слева, только в режиме карты */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            {viewMode === 'map' ? (
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                {/* Theme Switcher */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-3 bg-zinc-900 px-4 py-2.5 rounded-lg border border-yellow-400/20 w-full sm:w-auto"
                >
                  <Sun className={`w-4 h-4 transition-colors ${!isDarkMap ? 'text-yellow-400' : 'text-white/40'}`} />
                  <Switch
                    checked={isDarkMap}
                    onCheckedChange={(checked) => {
                      setIsDarkMap(checked);
                      // При переключении на темную тему отключаем POI, на светлую - включаем
                      setShowOtherIcons(!checked);
                    }}
                    className="data-[state=checked]:bg-yellow-400"
                  />
                  <Moon className={`w-4 h-4 transition-colors ${isDarkMap ? 'text-yellow-400' : 'text-white/40'}`} />
                </motion.div>

                {/* Show Other Icons Toggle - заблокирован в темной теме */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 }}
                  className="flex items-center justify-center gap-3 bg-zinc-900 px-4 py-2.5 rounded-lg border border-yellow-400/20 w-full sm:w-auto"
                >
                  <span className={`text-sm whitespace-nowrap transition-colors ${isDarkMap ? 'text-white/30' : 'text-white/70'}`}>{t('showOtherIcons')}</span>
                  <Switch
                    checked={showOtherIcons}
                    onCheckedChange={setShowOtherIcons}
                    disabled={isDarkMap}
                    className="data-[state=checked]:bg-yellow-400"
                  />
                </motion.div>
              </div>
            ) : (
              <div className="w-[180px]" />
            )}
          </div>

          {/* View Mode Toggle - в центре */}
          <div className="inline-flex items-center gap-2 bg-zinc-900 p-1 rounded-lg border border-yellow-400/20">
            <button
              onClick={() => setViewMode('map')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                viewMode === 'map'
                  ? 'bg-yellow-400 text-black'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <MapIcon className="w-4 h-4" />
              <span className="text-sm">{t('viewMap')}</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                viewMode === 'list'
                  ? 'bg-yellow-400 text-black'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <List className="w-4 h-4" />
              <span className="text-sm">{t('viewList')}</span>
            </button>
          </div>

          {/* Filters - справа */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="inline-flex items-center gap-2 bg-zinc-900 p-1 rounded-lg border border-yellow-400/20">
              <button
                onClick={() => setMapFilter('all')}
                className={`px-4 py-2 rounded-md transition-all text-sm ${
                  mapFilter === 'all'
                    ? 'bg-yellow-400 text-black'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {t('filterAll')}
              </button>
              <button
                onClick={() => setMapFilter('pickup')}
                className={`px-4 py-2 rounded-md transition-all text-sm ${
                  mapFilter === 'pickup'
                    ? 'bg-yellow-400 text-black'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {t('filterPickup')}
              </button>
              <button
                onClick={() => setMapFilter('return')}
                className={`px-4 py-2 rounded-md transition-all text-sm ${
                  mapFilter === 'return'
                    ? 'bg-yellow-400 text-black'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {t('filterReturn')}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Map View */}
        {viewMode === 'map' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-xl overflow-hidden shadow-2xl shadow-yellow-400/20 border border-yellow-400/10"
            style={{ 
              height: '70vh', 
              minHeight: '500px',
              touchAction: 'pan-x pan-y pinch-zoom'
            }}
          >
            <Map 
              center={mapCenter} 
              zoom={zoom}
              onBoundsChanged={({ center, zoom: newZoom }) => {
                setMapCenter(center);
                setZoom(newZoom);
              }}
              provider={(x, y, z, dpr) => {
                if (isDarkMap) {
                  // Темная тема - всегда с названиями улиц, переключатель POI не влияет
                  // (Dark Matter уже минималистичен, дополнительных POI почти нет)
                  return `https://a.basemaps.cartocdn.com/dark_all/${z}/${x}/${y}${dpr && dpr >= 2 ? '@2x' : ''}.png`;
                } else {
                  if (showOtherIcons) {
                    // Светлая тема + POI: OpenStreetMap с ресторанами, аптеками, парками и т.д.
                    return `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
                  } else {
                    // Светлая тема без POI: Voyager Labels Under - названия улиц есть, POI скрыты
                    return `https://a.basemaps.cartocdn.com/rastertiles/voyager_labels_under/${z}/${x}/${y}${dpr && dpr >= 2 ? '@2x' : ''}.png`;
                  }
                }
              }}
              attribution={false}
              attributionPrefix={false}
              metaWheelZoom={true}
              metaWheelZoomWarning="Use ctrl + wheel to zoom!"
              twoFingerDrag={false}
              twoFingerDragWarning=""
              warningZIndex={999}
              mouseEvents={true}
              touchEvents={true}
              minZoom={11}
              maxZoom={18}
            >
              {getFilteredLocations().map((location) => {
                const color = getMarkerColor(location);
                return (
                  <Marker 
                    key={location.id}
                    anchor={[location.lat, location.lng]}
                    payload={location}
                    onClick={() => handleLocationClick(location)}
                  >
                    <motion.svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill={color}
                      stroke={color}
                      strokeWidth="2"
                      style={{
                        cursor: 'pointer',
                        filter: `drop-shadow(0 0 12px ${color})`,
                        pointerEvents: 'auto',
                      }}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                    </motion.svg>
                  </Marker>
                );
              })}
            </Map>

            {/* Custom Attribution - Hidden */}
            <style>{`
              .pigeon-attribution {
                display: none !important;
              }
              .pigeon-attribution-link {
                display: none !important;
              }
            `}</style>
          </motion.div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {getFilteredLocations().map((location, index) => {
              const color = getMarkerColor(location);
              return (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleLocationClick(location)}
                  className="bg-zinc-900 rounded-xl overflow-hidden border border-yellow-400/10 hover:border-yellow-400/30 transition-all cursor-pointer group"
                >
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <ImageWithFallback
                      src={location.image}
                      alt={location.name[language]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                    
                    {/* Status Badge */}
                    <div 
                      className="absolute top-3 right-3 px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-2"
                      style={{ 
                        backgroundColor: `${color}20`,
                        border: `1px solid ${color}50`
                      }}
                    >
                      <Zap 
                        className="w-3 h-3" 
                        style={{ color }} 
                        fill={color}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="text-white text-lg mb-1">{location.name[language]}</h3>
                      <p className="text-white/50 text-sm">{getStatusText(location)}</p>
                    </div>

                    {!location.closed && (
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-black/30 rounded-lg p-2">
                          <p className="text-white/50 text-xs mb-1">{t('availableToPickup')}</p>
                          <p className="text-white text-lg">{location.available}</p>
                        </div>
                        <div className="bg-black/30 rounded-lg p-2">
                          <p className="text-white/50 text-xs mb-1">{t('availableToReturn')}</p>
                          <p className="text-white text-lg">{location.returnable}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <p className="text-yellow-400 font-mono text-sm">{location.code}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex flex-wrap gap-4 justify-center items-center"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-green-500" fill="#22c55e" />
            <span className="text-white/70 text-sm">{t('legendPickupOnly')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-500" fill="#3b82f6" />
            <span className="text-white/70 text-sm">{t('legendBoth')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-gray-400" fill="#9ca3af" />
            <span className="text-white/70 text-sm">{t('legendReturnOnly')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-red-500" fill="#ef4444" />
            <span className="text-white/70 text-sm">{t('legendClosed')}</span>
          </div>
        </motion.div>
      </div>

      {/* Location Details Modal */}
      <AnimatePresence>
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center p-4"
            onClick={() => setSelectedLocation(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-zinc-900 rounded-2xl max-w-md w-full overflow-hidden relative border border-yellow-400/20 shadow-2xl shadow-yellow-400/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedLocation(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={selectedLocation.image}
                  alt={selectedLocation.name[language]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-white mb-2">{selectedLocation.name[language]}</h3>
                  <div className="flex items-center gap-2">
                    <Zap
                      className="w-4 h-4"
                      style={{ color: getMarkerColor(selectedLocation) }}
                      fill={getMarkerColor(selectedLocation)}
                    />
                    <span className="text-white/70 text-sm">{getStatusText(selectedLocation)}</span>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-black/30 rounded-lg p-3 border-t border-white/10">
                  <p className="text-white/50 text-sm mb-1">{t('locationAddress')}</p>
                  <p className="text-white">{selectedLocation.address[language]}</p>
                </div>

                {/* Working Hours */}
                <div className="bg-black/30 rounded-lg p-3 border-t border-white/10">
                  <p className="text-white/50 text-sm mb-1">{t('workingHours')}</p>
                  <p className="text-white">{selectedLocation.workingHours[language]}</p>
                </div>

                {!selectedLocation.closed && (
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-white/10">
                    <div>
                      <p className="text-white/50 text-sm mb-1">{t('availablePickupOfTotal')}</p>
                      <p className="text-white text-xl">{selectedLocation.available} / {selectedLocation.totalSlots}</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">{t('availableReturnOfTotal')}</p>
                      <p className="text-white text-xl">{selectedLocation.returnable} / {selectedLocation.totalSlots}</p>
                    </div>
                  </div>
                )}

                <div>
                  <p className="text-white/50 text-sm mb-1">{t('locationCode')}</p>
                  <p className="text-yellow-400 font-mono text-lg">{selectedLocation.code}</p>
                </div>

                {!selectedLocation.closed && (
                  <Button 
                    onClick={() => openMapsApp(selectedLocation.lat, selectedLocation.lng, selectedLocation.name[language])}
                    className="w-full bg-yellow-400 text-black hover:bg-yellow-500 shadow-lg shadow-yellow-400/50 cursor-pointer"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    {t('continueRoute')}
                  </Button>
                )}

                {selectedLocation.closed && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-center">
                    <p className="text-red-400 text-sm">{t('locationClosed')}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
