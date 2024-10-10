export class AdvertisementModule {
  /**
   * Show an interstitial ad.
   */
  static async showInterstitialAd(requestId: string) {
    try {
      const sdk = await window.yandexSDK;

      await sdk.adv.showFullscreenAdv({
        callbacks: {
          onOpen: () => {
            console.log('Interstitial ad opened.');
            window.SendResponseToUnity(requestId, true, null, null);
          },
          onClose: (wasShown: boolean) => {
            if (wasShown) {
              console.log('Interstitial ad was shown successfully.');
              window.SendResponseToUnity(requestId, true, null, null);
            } else {
              console.log('Interstitial ad was not shown due to frequency limitation.');
              window.SendResponseToUnity(requestId, false, null, 'Interstitial ad was not shown due to frequency limitation.');
            }
          },
          onError: (error: any) => {
            console.error('Error while showing interstitial ad:', error);
            window.SendResponseToUnity(requestId, false, null, error.message || 'Failed to show interstitial ad.');
          },
          onOffline: () => {
            console.warn('Network connection lost, unable to show interstitial ad.');
            window.SendResponseToUnity(requestId, false, null, 'Network connection lost.');
          },
        },
      });
    } catch (error: any) {
      console.error('Failed to call interstitial ad:', error);
      window.SendResponseToUnity(requestId, false, null, error.message || 'Failed to call interstitial ad.');
    }
  }

  /**
   * Show a rewarded ad.
   */
  static async showRewardedAd(requestId: string) {
    try {
      const sdk = await window.yandexSDK;

      await sdk.adv.showRewardedVideo({
        callbacks: {
          onOpen: () => {
            console.log('Rewarded video ad opened.');
            // Optional: Notify Unity if needed
            window.SendResponseToUnity(requestId, true, 'AdOpened', null);
          },
          onRewarded: () => {
            console.log('Reward granted.');
            window.SendResponseToUnity(requestId, true, 'AdGranted', null);
          },
          onClose: () => {
            console.log('Rewarded video ad closed.');
            // Optional: Notify Unity if needed
            window.SendResponseToUnity(requestId, true, 'AdClosed', null);
          },
          onError: (error: any) => {
            console.error('Error while showing rewarded ad:', error);
            window.SendResponseToUnity(requestId, false, null, error.message || 'Failed to show rewarded video ad.');
          },
        },
      });
    } catch (error: any) {
      console.error('Failed to call rewarded ad:', error);
      window.SendResponseToUnity(requestId, false, null, error.message || 'Failed to call rewarded video ad.');
    }
  }

  /**
   * Show a sticky banner ad.
   * @param requestId The unique request ID.
   * @param position The position where the banner ad should be displayed (e.g., "top", "bottom").
   */
  static async showBannerAd(requestId: string, position: string) {
    try {
      const sdk = await window.yandexSDK;

      await sdk.adv.showBannerAdv({ position });
      console.log(`Banner ad shown at position: ${position}`);
      window.SendResponseToUnity(requestId, true, null, null);
    } catch (error: any) {
      console.error('Failed to show banner ad:', error);
      window.SendResponseToUnity(requestId, false, null, error.message || 'Failed to show banner ad.');
    }
  }

  /**
   * Hide the sticky banner ad.
   */
  static async hideBannerAd(requestId: string) {
    try {
      const sdk = await window.yandexSDK;

      await sdk.adv.hideBannerAdv();
      console.log('Banner ad hidden.');
      window.SendResponseToUnity(requestId, true, null, null);
    } catch (error: any) {
      console.error('Failed to hide banner ad:', error);
      window.SendResponseToUnity(requestId, false, null, error.message || 'Failed to hide banner ad.');
    }
  }
}
