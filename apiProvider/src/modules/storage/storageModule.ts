import { Utils } from "../../system/utils";
import { YandexGames } from "YandexGamesSDK";

export class StorageModule {
    static async savePlayerData(key: string, data: string, flush: boolean = true): Promise<void> {
        try {
            const player:YandexGames.Player = await window.yandexSDK.getPlayer();
            await player.setData({ [key]: data }, flush);

            unityInstance.SendMessage('YandexGamesSDK', 'OnPlayerDataSaved', 'true');
        } catch (error: any) {
            console.error("Failed to save player data:", error.message);
            unityInstance.SendMessage('YandexGamesSDK', 'OnPlayerDataSaved', `false|${error.message}`);
        }
    }

    static async loadPlayerData(key: string): Promise<void> {
        try {
            const player = await window.yandexSDK.getPlayer();
            const result = await player.getData([key]);

            if (result && result.hasOwnProperty(key)) {
                const data = result[key];
                console.log(`Loaded player data from Yandex for key: ${key}`, data);
                unityInstance.SendMessage('YandexGamesSDK', 'OnPlayerDataLoaded', JSON.stringify({ success: true, data }));
            } else {
                console.warn(`No data found in Yandex for key: ${key}`);
                unityInstance.SendMessage('YandexGamesSDK', 'OnPlayerDataLoaded', 'false|No data found for the given key');
            }
        } catch (error: any) {
            console.error("Failed to load player data:", error.message);
            unityInstance.SendMessage('YandexGamesSDK', 'OnPlayerDataLoaded', `false|${error.message}`);
        }
    }
}
