const home_button = document.getElementById("iphone-home")
const mute_button = document.getElementById("iphone-mute")
const volume_up_button = document.getElementById("iphone-v-up")
const volume_down_button = document.getElementById("iphone-v-down")
const power_button = document.getElementById("iphone-power")

// initial state of iPhone:
const iphone_state = {
    screen: true,
    block: true,
    volume: 5,
    mute: false,
}

// Variables that are needed to clear setTimeout when the buttons are pressed
let hide_volume;
let hide_mute;


// Home Button Listener
home_button.addEventListener("click", ()=>{
    if (iphone_state.screen){
        iphone_state.block = false;

    } else{
        iphone_state.screen = true;
        iphone_state.block = false;

        document.getElementById('iphone-screen').style.opacity = "1";
    }

    document.getElementById('iphone-lock-img').src = "../img/lock-open.svg"

})

// Mute Button Listener
mute_button.addEventListener("click", ()=>{
    clearTimeout(hide_mute)

    document.getElementById('iphone-mute-block').style.opacity = "1";

    hide_mute = setTimeout(()=>{
        document.getElementById('iphone-mute-block').style.opacity = "0";
    }, 2000)

    if (iphone_state.mute){
        iphone_state.mute = false;
        document.getElementById('iphone-mute-image').src = "../img/mute-off.svg"
        document.getElementById('iphone-mute-text').innerText = "Mute off"

    } else{
        iphone_state.mute = true;
        document.getElementById('iphone-mute-image').src = "../img/mute-on.svg"
        document.getElementById('iphone-mute-text').innerText = "Mute on"
    }
})

// Volume Up Button Listener
volume_up_button.addEventListener("click", ()=>{

    clearTimeout(hide_volume)

    document.getElementById('iphone-volume').style.opacity = "1";

    hide_volume = setTimeout(()=>{
        document.getElementById('iphone-volume').style.opacity = "0";
    }, 2000)

    if (iphone_state.volume < 10){
        iphone_state.volume ++;
        document.getElementById('iphone-volume').style.backgroundImage = "linear-gradient(0deg, #FFFFFF " + iphone_state.volume + "0%, transparent " + iphone_state.volume + "0%)"
    } else{
        document.getElementById('iphone-volume').style.backgroundImage = "linear-gradient(0deg, #FFFFFF 100%, transparent 100%)"
    }

})

// volume Down Button Listener
volume_down_button.addEventListener("click", ()=>{

    clearTimeout(hide_volume)

    document.getElementById('iphone-volume').style.opacity = "1";

    hide_volume = setTimeout(()=>{
        document.getElementById('iphone-volume').style.opacity = "0";
    }, 2000)

    if (iphone_state.volume > 0){
        iphone_state.volume --;
        document.getElementById('iphone-volume').style.backgroundImage = "linear-gradient(0deg, #FFFFFF " + iphone_state.volume + "0%, transparent " + iphone_state.volume + "0%)"
    } else{
        document.getElementById('iphone-volume').style.backgroundImage = "linear-gradient(0deg, #FFFFFF 0%, transparent 0%)"
    }

})

// Power Button Listener
power_button.addEventListener("click", ()=>{
    if (iphone_state.screen){
        iphone_state.screen = false;
        iphone_state.block = true;

        document.getElementById('iphone-screen').style.opacity = "0";
        document.getElementById('iphone-lock-img').src = "../img/lock-close.svg"
    } else{
        iphone_state.screen = true;

        document.getElementById('iphone-screen').style.opacity = "1";
    }
})