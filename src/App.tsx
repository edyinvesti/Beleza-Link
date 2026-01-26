import { useState } from 'react';
import Layout from './components/Layout';
import SplashScreen from './components/SplashScreen';
import { IATab } from './components/tabs/IATab';
import { FinanceiroTab } from './components/tabs/FinanceiroTab';
import { ScannerTab } from './components/tabs/ScannerTab';
import Live from './components/Live';
import { GeolocalizacaoTab } from './components/tabs/GeolocalizacaoTab';
import Curso from './components/tabs/Curso';

export default function App() {
  const [activeTab, setActiveTab] = useState('ia');
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) return <SplashScreen onFinish={() => setShowSplash(false)} />;

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'ia' && <IATab />}
      {activeTab === 'scanner' && <ScannerTab />}
      {activeTab === 'financeiro' && <FinanceiroTab />}
      {activeTab === 'live' && <Live />}
      {activeTab === 'vitrine' && <GeolocalizacaoTab />}
      {activeTab === 'cursos' && <Curso />}
    </Layout>
  );
}