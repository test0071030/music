var cond=0;
var timeout;
function setnull(){
    cond=0;
    
    var allplayers = document.getElementsByClassName('player');
    var allbells = document.getElementsByClassName('bell');
    for (i=0;i<allplayers.length;i++){
        allplayers[i].pause();
        allplayers[i].currentTime=0;
    }
    for (i=0;i<allbells.length;i++){
        allbells[i].disabled=false;
    }
    clearTimeout(timeout);
}
function bellpuase6p(){
    var player = document.getElementById('6p');
    var bell = document.getElementById('bell6');
    setTimeout(function(){
        if(cond==0){
            player.currentTime=0;
            player.play();
            bell.disabled=true;
            timeout=setTimeout(function(){
                player.pause();
                bell.disabled=false;
                if(player.currentTime>=16){
                    cond=1;
                }
            }, 17000);
        }
        if(cond==1){
            player.currentTime=17;
            player.play();
            bell.disabled=true;
            timeout=setTimeout(function(){
                player.pause();
                bell.disabled=false;
                if(player.currentTime>=32){
                    cond=2;
                }
            }, 16000);
        }
        if(cond==2){
            player.currentTime=33;
            player.play();
            bell.disabled=true;
            timeout=setTimeout(function(){
                player.pause();
                bell.disabled=false;
                if(player.currentTime>=60){
                    cond=3;
                }
            }, 28000);
        }
        if(cond==3){
            player.currentTime=61;
            player.play();
            cond=0;
        }
    }, 500);
}
function bellpuase7p(){
    var player = document.getElementById('7p');
    var bell = document.getElementById('bell7');
    setTimeout(function(){
        if(cond==0){
            player.currentTime=0;
            player.play();
            bell.disabled=true;
            timeout=setTimeout(function(){
                player.pause();
                bell.disabled=false;
                if(player.currentTime>=16){
                    cond=4;
                }
            }, 17000);
        }
        if(cond==4){
            player.currentTime=17;
            player.play();
            bell.disabled=true;
            timeout=setTimeout(function(){
                player.pause();
                bell.disabled=false;
                if(player.currentTime>=32){
                    cond=5;
                }
            }, 16000);
        }
        if(cond==5){
            player.currentTime=33;
            player.play();
            bell.disabled=true;
            timeout=setTimeout(function(){
                player.pause();
                ell.disabled=false;
                if(player.currentTime>=60){
                    cond=6;
                }
            }, 28000);
        }
        if(cond==6){
            player.currentTime=61;
            player.play();
            bell.disabled=true;
            timeout=setTimeout(function(){
                player.pause();
                bell.disabled=false;
                if(player.currentTime>=60){
                    cond=7;
                }
            }, 23000);
        }
        if(cond==7){
            player.currentTime=84;
            player.play();
            bell.disabled=true;
            timeout=setTimeout(function(){
                player.pause();
                bell.disabled=false;
                if(player.currentTime>=60){
                    cond=8;
                }
            }, 18000);
        }
        if(cond==8){
            player.currentTime=103;
            player.play();
            cond=0;
        }
    }, 500);
}
function bellpuase8p(){
    var player = document.getElementById('8p');
    var bell = document.getElementById('bell8');
    setTimeout(function(){
        if(cond==0){
            player.currentTime=0;
            player.play();
            bell.disabled=true;
            timeout=setTimeout(function(){
                player.pause();
                bell.disabled=false;
                if(player.currentTime>=16){
                    cond=9;
                }
            }, 17000);
        }
        if(cond==9){
            player.currentTime=17;
            player.play();
            bell.disabled=true;
            timeout=setTimeout(function(){
                player.pause();
                bell.disabled=false;
                if(player.currentTime>=32){
                    cond=10;
                }
            }, 16000);
        }
        if(cond==10){
            player.currentTime=33;
            player.play();
            bell.disabled=true;
            timeout=setTimeout(function(){
                player.pause();
                bell.disabled=false;
                if(player.currentTime>=60){
                    cond=11;
                }
            }, 28000);
        }
        if(cond==11){
            player.currentTime=61;
            player.play();
            cond=0;
        }
    }, 500);
}
function bellpuase9p(){
    var player = document.getElementById('9p');
    var bell = document.getElementById('bell9');
    setTimeout(function(){
        if(cond==0){
            player.currentTime=0;
            player.play();
            bell.disabled=true;
            timeout=setTimeout(function(){
                player.pause();
                bell.disabled=false;
                if(player.currentTime>=16){
                    cond=12;
                }
            }, 17000);
        }
        if(cond==12){
            player.currentTime=17;
            player.play();
            bell.disabled=true;
            timeout=setTimeout(function(){
                player.pause();
                bell.disabled=false;
                if(player.currentTime>=32){
                    cond=13;
                }
            }, 16000);
        }
        if(cond==13){
            player.currentTime=33;
            player.play();
            bell.disabled=true;
            timeout=setTimeout(function(){
                player.pause();
                bell.disabled=false;
                if(player.currentTime>=60){
                    cond=14;
                }
            }, 28000);
        }
        if(cond==14){
            player.currentTime=61;
            player.play();
            bell.disabled=true;
            timeout=setTimeout(function(){
                player.pause();
                bell.disabled=false;
                if(player.currentTime>=60){
                    cond=15;
                }
            }, 23000);
        }
        if(cond==15){
            player.currentTime=84;
            player.play();
            bell.disabled=true;
            timeout=setTimeout(function(){
                player.pause();
                bell.disabled=false;
                if(player.currentTime>=60){
                    cond=16;
                }
            }, 18000);
        }
        if(cond==16){
            player.currentTime=103;
            player.play();
            cond=0;
        }
    }, 500);
}