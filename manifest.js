/*
 *  Song specificiation for lyrical compositions from Alt Tal 
 */

var lyricalCompositionsSongs = lyricalCompositionsSongs || {};

lyricalCompositionsSongs = {

    partsInBooks: {
        "Concert Lead Sheets": {
            "Force of Nature": [ "Concert Lead Sheet" ], 
            "Frivolity": [ "Concert Lead Sheet" ], 
            "Jasmine": [ "Concert Lead Sheet" ], 
            "Just a Cup of Coffee": [ "Concert Lead Sheet" ], 
            "Mark Time": [ "Concert Lead Sheet" ], 
            "Seven O'Clock Tune": [ "Concert Lead Sheet" ], 
            "Three Out of Four Nights": [ "Concert Lead Sheet" ], 
        },
    },

// News from Milan
// https://alttal.com/media/mp3/open-the-gates/News%20from%20Milan.mp3
// https://alttal.com/media/pdf/open-the-gates/news-from-milan.pdf

// Catch Me
// https://alttal.com/media/mp3/open-the-gates/Catch%20Me.mp3
// https://alttal.com/media/pdf/open-the-gates/catch-me.pdf

// l'Amoureuse de mon Pere
// https://alttal.com/media/mp3/open-the-gates/lAmoureuse%20de%20mon%20Pere.mp3
// https://alttal.com/media/pdf/open-the-gates/lamoureuse-de-mon-pere.pdf

// Elaine
// https://alttal.com/media/mp3/open-the-gates/Elaine.mp3
// https://alttal.com/media/pdf/open-the-gates/elaine.pdf

    songs: {

        "Force of Nature": {
            metadata: { 
                title: "Force of Nature",
                composer: "Elaine Paul",
                genre: "Jazz Blues",
                bpm: '112',
                key: "G", 
                time: "3/4",
                date: "2000"
            },
            baseUrl: 'https://altjazz.org/scores/lyrical-compositions/', 
            pdfSubdir: "",
            fileLocation: "force-of-nature",
            filePrefix: "force-of-nature-",
            parts: {
                "Concert Lead Sheet": { fileSuffix: "Lead-Sheet-C" },
            },
            scores: {
                //"Concert Lead Sheet": { fileSuffix: "Lead-Sheet-C" }
            },
            recordings: {
                album: {
                    description: 'Track 3 from Open the Gates! as mp3',
                    url: 'https://alttal.com/media/mp3/open-the-gates/Force%20of%20Nature.mp3'
                },
                youtube: {
                    description: 'From Open the Gates! playlist on youtube',
                    url: 'https://www.youtube.com/watch?v=NoYvp8pKftY&list=OLAK5uy_mRX13K7hUUUolZs7rAmpikIUX1j2czEUM&index=3'
                },
                streamed: {
                    description: 'Twitch stream from Nonbinary Fully-Automated Luxury Gay Communism #3',
                    url: 'https://www.twitch.tv/videos/1227467027'
                },
            }
        },

        "Frivolity": {
            metadata: { 
                title: "Frivolity",
                composer: "Elaine Paul",
                genre: "Ballad",
                bpm: '64',
                key: "E", 
                time: "4/4 with 3/4",
                date: "2000"
            },
            baseUrl: 'https://altjazz.org/scores/lyrical-compositions/', 
            pdfSubdir: "",
            fileLocation: "frivolity",
            filePrefix: "frivolity-",
            parts: {
                "Concert Lead Sheet": { fileSuffix: "Lead-Sheet-C" },
            },
            scores: {
                //"Concert Lead Sheet": { fileSuffix: "Lead-Sheet-C" }
            },
            recordings: {
                album: {
                    description: 'Track 8 from Open the Gates! as mp3',
                    url: 'https://alttal.com/media/mp3/open-the-gates/Frivolity.mp3'
                },
                youtube: {
                    description: 'From Open the Gates! playlist on youtube',
                    url: 'https://www.youtube.com/watch?v=NoYvp8pKftY&list=OLAK5uy_mRX13K7hUUUolZs7rAmpikIUX1j2czEUM&index=8'
                },
                streamed: {
                    description: 'Twitch stream from Nonbinary Fully-Automated Luxury Gay Communism #3',
                    url: 'https://www.twitch.tv/videos/1227467027'
                },
            }
        },        

        "Jasmine": {
            metadata: { 
                title: "Jasmine",
                composer: "Elaine Paul",
                genre: "Ballad",
                bpm: '64',
                key: "E", 
                time: "3/4",
                date: "2000"
            },
            baseUrl: 'https://altjazz.org/scores/lyrical-compositions/', 
            pdfSubdir: "",
            fileLocation: "jasmine",
            filePrefix: "jasmine-",
            parts: {
                "Concert Lead Sheet": { fileSuffix: "Lead-Sheet-C" },
            },
            scores: {
                //"Concert Lead Sheet": { fileSuffix: "Lead-Sheet-C" }
            },
            recordings: {
                album: {
                    description: 'Track 6 from Open the Gates! as mp3',
                    url: 'https://alttal.com/media/mp3/open-the-gates/Jasmine.mp3'
                },
                youtube: {
                    description: 'From Open the Gates! playlist on youtube',
                    url: 'https://www.youtube.com/watch?v=NoYvp8pKftY&list=OLAK5uy_mRX13K7hUUUolZs7rAmpikIUX1j2czEUM&index=6'
                },
                streamed: {
                    description: 'Twitch stream from Nonbinary Fully-Automated Luxury Gay Communism #3',
                    url: 'https://www.twitch.tv/videos/1227467027'
                },
            }
        },        

        "Just a Cup of Coffee": {
            metadata: { 
                title: "Just a Cup of Coffee",
                composer: "Elaine Paul",
                genre: "Ballad",
                bpm: '56',
                key: "D", 
                time: "4/4",
                date: "1998"
            },
            baseUrl: 'https://altjazz.org/scores/lyrical-compositions/', 
            pdfSubdir: "",
            fileLocation: "just-a-cup-of-coffee",
            filePrefix: "just-a-cup-of-coffee-",
            parts: {
                "Concert Lead Sheet": { fileSuffix: "Lead-Sheet-C" },
            },
            scores: {
                //"Concert Lead Sheet": { fileSuffix: "Lead-Sheet-C" }
            },
            recordings: {
                album: {
                    description: 'Track from Tri',
                    url: ''
                },
                demo: {
                    description: 'Mutual Admiration Org extended arrangement as mp3',
                    url: 'http://ali-cia.net/mutualadmiration/media/mp3/mao/tracking/Just%20a%20Cup%20of%20Coffee.mp3'
                },
                streamed: {
                    description: 'Twitch stream from Nonbinary Fully-Automated Luxury Gay Communism #3',
                    url: 'https://www.twitch.tv/videos/1227467027'
                },
            }
        },  

        "Mark Time": {
            metadata: { 
                title: "Mark Time",
                composer: "Elaine Paul",
                genre: "Jazz Waltz",
                bpm: '184',
                key: "E", 
                time: "3/4 with 4/4",
                date: "2000"
            },
            baseUrl: 'https://altjazz.org/scores/lyrical-compositions/', 
            pdfSubdir: "",
            fileLocation: "mark-time",
            filePrefix: "mark-time-",
            parts: {
                "Concert Lead Sheet": { fileSuffix: "Lead-Sheet-C" },
            },
            scores: {
                //"Concert Lead Sheet": { fileSuffix: "Lead-Sheet-C" }
            },
            recordings: {
                album: {
                    description: 'Track 3 from Open the Gates! as mp3',
                    url: 'https://alttal.com/media/mp3/open-the-gates/Mark%20Time.mp3'
                },
                youtube: {
                    description: 'From Open the Gates! playlist on youtube',
                    url: 'https://www.youtube.com/watch?v=NoYvp8pKftY&list=OLAK5uy_mRX13K7hUUUolZs7rAmpikIUX1j2czEUM&index=3'
                },
                streamed: {
                    description: 'Twitch stream from Nonbinary Fully-Automated Luxury Gay Communism #3',
                    url: 'https://www.twitch.tv/videos/1227467027'
                },
            }
        },        

        "Seven O'Clock Tune": {
            metadata: { 
                title: "Seven O'Clock Tune",
                composer: "Elaine Paul",
                genre: "Tal",
                bpm: '176',
                key: "A", 
                time: "3/4",
                date: "2000"
            },
            baseUrl: 'https://altjazz.org/scores/lyrical-compositions/', 
            pdfSubdir: "",
            fileLocation: "seven-oclock-tune",
            filePrefix: "seven-oclock-tune-",
            parts: {
                "Concert Lead Sheet": { fileSuffix: "Lead-Sheet-C" },
            },
            scores: {
                //"Concert Lead Sheet": { fileSuffix: "Lead-Sheet-C" }
            },
            recordings: {
                album: {
                    description: 'Track 10 from Open the Gates! as mp3',
                    url: 'https://alttal.com/media/mp3/open-the-gates/Seven%20OClock%20Tune.mp3'
                },
                youtube: {
                    description: 'From Open the Gates! playlist on youtube',
                    url: 'https://www.youtube.com/watch?v=NoYvp8pKftY&list=OLAK5uy_mRX13K7hUUUolZs7rAmpikIUX1j2czEUM&index=10'
                },
                streamed: {
                    description: 'Twitch stream from Nonbinary Fully-Automated Luxury Gay Communism #3',
                    url: 'https://www.twitch.tv/videos/1227467027'
                },
            }
        },        

        "Three Out of Four Nights": {
            metadata: { 
                title: "Three Out of Four Nights",
                composer: "Elaine Paul",
                genre: "ECM",
                bpm: '144',
                key: "D", 
                time: "4/4",
                date: "2000"
            },
            baseUrl: 'https://altjazz.org/scores/lyrical-compositions/', 
            pdfSubdir: "",
            fileLocation: "three-out-of-four-nights",
            filePrefix: "three-out-of-four-nights-",
            parts: {
                "Concert Lead Sheet": { fileSuffix: "Lead-Sheet-C" },
            },
            scores: {
                //"Concert Lead Sheet": { fileSuffix: "Lead-Sheet-C" }
            },
            recordings: {
                album: {
                    description: 'Track from Tri as mp3',
                    url: 'https://alttal.com/media/mp3/tri/Three%20Out%20of%20Four%20Nights.mp3'
                },
                streamed: {
                    description: 'Twitch stream from Nonbinary Fully-Automated Luxury Gay Communism #3',
                    url: 'https://www.twitch.tv/videos/1227467027'
                },
            }
        },        


    }
};