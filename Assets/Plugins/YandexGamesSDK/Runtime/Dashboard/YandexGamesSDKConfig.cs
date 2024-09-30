using System;
using System.Collections.Generic;
using Plugins.YandexGamesSDK.Runtime.Singletons;
using UnityEngine;
using UnityEngine.Serialization;

namespace Plugins.YandexGamesSDK.Runtime.Dashboard
{
    [Serializable]
    public record DevelopmentSettings
    {
        public bool runLocalServerAfterBuild = false;
        public bool overrideOnBuild = true;
        public string buildPath;
        public int serverPort = 8080;
    }

    [Serializable]
    public record MockDataSettings
    {
        [Header("Mock User Profile")] public MockUserProfile mockUserProfile;

        [Header("Mock Leaderboard Data")] public List<MockLeaderboardEntry> mockLeaderboardEntries;
    }

    [Serializable]
    public record MockUserProfile
    {
        public string id;
        public string name;
        public bool isAuthorized;
        public string avatarUrlSmall;
        public string avatarUrlMedium;
        public string avatarUrlLarge;
    }

    [Serializable]
    public record MockLeaderboardEntry
    {
        public string playerId;
        public string playerName;
        public int score;
    }

    [CreateAssetMenu(fileName = "YandexGamesSDKConfig", menuName = "Yandex Games SDK/Config", order = 1)]
    public class YandexGamesSDKConfig : ScriptableObjectSingleton<YandexGamesSDKConfig>
    {
        [Header("General Settings")] public string appID = "YOUR_GAME_ID";
        public bool isYandexPlatform = false;
        public bool verboseLogging = false;

        public bool useMockData = true;
        [Header("Mock Settings")] public MockDataSettings mockData;

        [Header("Development Settings")] public DevelopmentSettings developmentSettings;

        public void SetServerConfiguration(string buildPath, int serverPort)
        {
            if (developmentSettings.overrideOnBuild)
            {
                developmentSettings.buildPath = buildPath;
                developmentSettings.serverPort = serverPort;
            }
        }
    }
}