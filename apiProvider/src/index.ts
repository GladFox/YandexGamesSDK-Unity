import { AuthModule } from './modules/auth/authModule';
import { YandexGamesSDK } from './modules/YandexGamesSDK';
import { StorageModule } from './modules/storage/storageModule';
import { LeaderboardModule } from './modules/leaderboard/leaderboardModule';
import { GameplayModule } from './modules/gameplay/gameplayModule';
import { AdvertisementModule } from './modules/ads/advertisementModule';

window.YandexSDKVersion = YANDEX_SDK_VERSION;


window.YandexSDKExports = {
  AuthenticateUser: AuthModule.authenticateUser,
  SavePlayerData: StorageModule.savePlayerData,
  LoadPlayerData: StorageModule.loadPlayerData,
  CheckForInitialization: YandexGamesSDK.checkForInitialization,
  OnYandexGamesSDKReady: YandexGamesSDK.OnYandexGamesSDKReady,
  GetServerTime: YandexGamesSDK.getServerTime,
  GetEnvironment: YandexGamesSDK.getEnvironment,
  SubmitScore: LeaderboardModule.submitScore,
  GetLeaderboardEntries: LeaderboardModule.getLeaderboardEntries,
  GetPlayerEntry: LeaderboardModule.getPlayerEntry,
  SetGameplayReady: GameplayModule.setGameplayReady,
  SetGameplayStart: GameplayModule.setGameplayStart,
  SetGameplayStop: GameplayModule.setGameplayStop,

  HideBannerAd: AdvertisementModule.hideBannerAd,
  ShowBannerAd: AdvertisementModule.showBannerAd,
  ShowInterstitialAd: AdvertisementModule.showInterstitialAd,
  ShowRewardedAd: AdvertisementModule.showRewardedAd,
};


window.addEventListener('load', () => {
  YandexGamesSDK.initialize();
});
