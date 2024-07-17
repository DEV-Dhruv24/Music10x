const songs = [
    { name: 'Kesariya', path: 'MAIN/directorys/audio/top trending/Kesariya - Brahmāstra _ Ranbir Kapoor _ Alia Bhatt _ Pritam _ Arijit Singh _ Amitabh Bhattacharya_4K.mp3' },
    { name: 'Pasoori', path: 'MAIN/directorys/audio/top trending/Coke Studio _ Season 14 _ Pasoori _ Ali Sethi x Shae Gill.mp3' },
    { name: 'Bijlee Bijlee' , path: 'MAIN/directorys/audio/top trending/Harrdy Sandhu - Bijlee Bijlee ft Palak Tiwari _ Jaani _ BPraak _ Arvindr Khaira _ Desi Melodies.mp3'},
    { name: 'Pal Pal Dil Ke Paas' , path: 'MAIN/directorys/audio/speedup/Blackmail - Pal Pal Dil Ke Paas Tum Rehti Ho - Kishore Kumar.mp3' },
    { name: 'Tujhe Dekha Toh ' , path: 'MAIN/directorys/audio/slowed/Tujhe Dekha Toh Song _ Dilwale Dulhania Le Jayenge _ Shah Rukh Khan, Kajol _ Lata, Kumar Sanu _ DDLJ.mp3' },
    { name: 'Aap Ki Nazro Ne Samjha ' , path: 'MAIN/directorys/audio/slowed/आपकी नज़रों ने समझा Aap Ki Nazro Ne Samjha - HD वीडियो सोंग - लता मंगेशकर - अनपढ़ (1962).mp3' },
    { name: 'Teri yadon main' , path: 'C:\Users\Dhruv\Desktop\web\Music10x\MAIN\directorys\audio\my playlist\𝙏𝙚𝙧𝙞 𝙔𝙖𝙖𝙙𝙤𝙣 𝙈𝙚𝙞𝙣 (𝙎𝙡𝙤𝙬𝙚𝙙 & 𝙍𝙚𝙫𝙚𝙧𝙗) 𝙆𝙆 , 𝙎𝙝𝙧𝙚𝙮𝙖 𝙂𝙝𝙤𝙨𝙖𝙡 _ 𝙏𝙝𝙚 𝙆𝙞𝙡𝙡𝙚𝙧@FlixMuzik.mp3'},
    { name: 'Ghalat fehmi' , path: 'MAIN/directorys/audio/my playlist/Ghalat Fehmi [Slowed+Reverb] _ Tarasti Hai Nigahen _ Lofi _ Textaudio.mp3'},
    { name: 'Main royan' , path: 'MAIN/directorys/audio/my playlist/Maine Royaan _ Lofi~Remix_ Tanveer Evan..mp3'},
    { name: 'Falak tak chal' , path: 'MAIN/directorys/audio/my playlist/Falak Tak Chal Sath Mere _ ( Slowed + Reverb ) #lofi #lofimusic @koja_asthetic.mp3'},
    { name: 'Mare sapno ke rani' , path: 'MAIN/directorys/audio/speedup/Mere Sapno Ki Rani 4K Song - Aradhana _ Rajesh Khanna _ Kishore Kumar _ Sharmila Tagore.mp3'},
    { name: 'Humein Tumse Pyar' , path: 'MAIN/directorys/audio/speedup/हमें तुमसे प्यार कितना _ Humein Tumse Pyar with lyrics _ Kudrat _ Rajesh Khanna _ Hema Malini.mp3'},
    { name: 'O Sathi re' , path: 'MAIN/directorys/audio/speedup/O Saathi Re (Male) with lyrics _ ओ साथी रे गाने के बोल _ Muqaddar ka Sikandar _ Rekha_Amitabh Bachan.mp3'},
    { name: 'Channa Mereya' , path: 'MAIN/directorys/audio/Arijit/Channa Mereya Full Video - ADHM_Ranbir Kapoor, Anushka_Arijit Singh_Pritam_Karan Johar.mp3'},
    { name: 'h Shaam Mastan' , path: 'MAIN/directorys/audio/speedup/Yeh Shaam Mastani 4K _ Kishore Kumar _ Rajesh Khanna _ Kati Patang _ Classic Bollywood 4K Video Song.mp3'},
    { name: 'Tera Yaar Hoon Main' , path: 'MAIN/directorys/audio/Arijit/Full Video_ Tera Yaar Hoon Main _ Sonu Ke Titu Ki Sweety _ Arijit Singh Rochak Kohli _ Song 2018.mp3'},
    { name: 'Jeene Laga Hoon ' , path: 'MAIN/directorys/audio/Arijit/Girish Kumar Songs _ Jeene Laga Hoon _ Shruti Hasan _ Atif, Shreya _ Ramaiya Vastavaiya.mp3'},
    { name: 'Phir Kabhi' , path: 'MAIN/directorys/audio/my playlist/Phir Kabhi (M.S. Dhoni) _ Slowed & Reverb _ Aesthetic Reverbs.mp3'},
    { name: 'sia' , path: 'MAIN/directorys/audio/my playlist/sia - snowman (slowed + reverb) [with lyrics].mp3'},
    { name: 'Tere Hawaale' , path: 'MAIN/directorys/audio/my playlist/Tere Hawaale - Lofi (Slowed + Reverb) _ Arijit Singh, Shilpa Rao _ SR Lofi.mp3'},
    { name: 'Kya hua tera wada' , path: 'MAIN/directorys/audio/my playlist/Kya hua tera wada_(slowed+reverb)_-Mohammed Rafi & Sushma Shreshtha.mp3'},
    { name: 'the weakend' , path: 'MAIN/directorys/audio/my playlist/the weeknd - save your tears [slowed & reverb].mp3'},
    { name: 'Tere Bina Zindagi' , path: 'MAIN/directorys/audio/slowed/Tere Bina Zindagi Se Koi Shikwa To Nahin _ Lata Mangeshkar, Kishore Kumar _ Aandhi 1975 Songs.mp3'},
];

function playRandomSong() {
    console.log('playRandomSong function called'); // Debug log

    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];
    const audioPlayer = document.getElementById('audioPlayer');

    if (audioPlayer) {
        audioPlayer.src = randomSong.path;
        audioPlayer.play().then(() => {
            alert(`Now playing: ${randomSong.name}`);
        }).catch(error => {
            console.error('Error playing audio:', error); // Debug log
            alert('Error playing the song.');
        });
    } else {
        console.error('Audio player not found'); // Debug log
    }
}

document.querySelector('.btn').addEventListener('click', playRandomSong);
console.log('Event listener added to the button'); // Debug log
