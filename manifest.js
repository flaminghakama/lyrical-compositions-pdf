/*
 *  Song specificiation for lyrical compositions from Alt Tal 
 */

var lyricalCompositionsSongs = lyricalCompositionsSongs || {};

lyricalCompositionsSongs = {

    partsInBooks: {
        "Concert Lead Sheets": {
            "Force of Nature": [ "Concert Lead Sheet" ], 
            "Mark Time": [ "Concert Lead Sheet" ], 
        },
    },

// Just a Cup of Coffee
// (this recording is an extended arrangement, I need to find the Alt Tal trio version...)
// http://ali-cia.net/mutualadmiration/media/mp3/mao/tracking/Just%20a%20Cup%20of%20Coffee.mp3
// https://altjazz.org/lessons/pdf/songs/alt/just-a-cup-of-coffee-for-C.pdf

// Frivolity
// http://alttal.com/media/mp3/open-the-gates/Frivolity.mp3
// https://altjazz.org/lessons/pdf/songs/alt/frivolity-for-C.pdf

// Jasmine
// http://alttal.com/media/mp3/open-the-gates/Jasmine.mp3
// https://altjazz.org/lessons/pdf/songs/alt/jasmine-for-C.pdf

// Force of Nature
// http://alttal.com/media/mp3/open-the-gates/Force%20of%20Nature.mp3
// https://altjazz.org/lessons/pdf/songs/alt/force-of-nature-for-C.pdf

// Seven O'Clock Tune
// http://alttal.com/media/mp3/open-the-gates/Seven%20OClock%20Tune.mp3
// https://altjazz.org/lessons/pdf/songs/alt/seven-oclock-tune-for-C.pdf

// Three Out of Four Nights
// http://alttal.com/media/mp3/tri/Three%20Out%20of%20Four%20Nights.mp3
// https://altjazz.org/lessons/pdf/songs/alt/three-out-of-four-nights-for-C.pdf



// These next several would require more rehearsal, since the forms are longer, or more tricky rhythms.  So, maybe only one of these.  I'm probably leaning towards Catch Me.


// (Note, these are older PDFs that are quite big)

// News from Milan
// http://alttal.com/media/mp3/open-the-gates/News%20from%20Milan.mp3
// http://alttal.com/media/pdf/open-the-gates/news-from-milan.pdf

// Catch Me
// http://alttal.com/media/mp3/open-the-gates/Catch%20Me.mp3
// http://alttal.com/media/pdf/open-the-gates/catch-me.pdf

// l'Amoureuse de mon Pere
// http://alttal.com/media/mp3/open-the-gates/lAmoureuse%20de%20mon%20Pere.mp3
// http://alttal.com/media/pdf/open-the-gates/lamoureuse-de-mon-pere.pdf

// Elaine
// http://alttal.com/media/mp3/open-the-gates/Elaine.mp3
// http://alttal.com/media/pdf/open-the-gates/elaine.pdf

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
                    url: 'http://alttal.com/media/mp3/open-the-gates/Force%20of%20Nature.mp3'
                },
                youtube: {
                    description: 'From Open the Gates! playlist on youtube',
                    url: 'https://www.youtube.com/watch?v=NoYvp8pKftY&list=OLAK5uy_mRX13K7hUUUolZs7rAmpikIUX1j2czEUM&index=3'
                },
                streamed: {
                    description: 'Twitch stream from Nonbinary Fully-Automated Luxury Gay Communism #3',
                    url: 'https://www.twitch.tv/altjazzark'
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
                time: "3/4",
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
                    description: 'Track 3 from Open the Gates!',
                    url: 'http://alttal.com/media/mp3/open-the-gates/Mark%20Time.mp3'
                },
                youtube: {
                    description: 'From Open the Gates! playlist on youtube',
                    url: 'https://www.youtube.com/watch?v=NoYvp8pKftY&list=OLAK5uy_mRX13K7hUUUolZs7rAmpikIUX1j2czEUM&index=3'
                },
                streamed: {
                    description: 'Twitch stream from Nonbinary Fully-Automated Luxury Gay Communism #3',
                    url: 'https://www.twitch.tv/altjazzark'
                },
            }
        },        
    }
};