//オセロ
var black_stone='url("http://i.imgur.com/CLEpdaJ.png")';
var white_stone='url("http://i.imgur.com/VZgXNBM.png")';
var black=1;
var white=-1;
var field=[
   [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]];

var move_date=[[ 1, -1], [ 1, 0], [ 1, 1],
                          [ 0, -1],            [ 0, 1],
                          [-1, -1], [-1, 0], [-1, 1]
                        ];

//盤に表示
window.onload = function(){
  //初期
  id_set();
  ban_init();

  //盤の初期セット
  function id_set(){
  //td全てにidをつける
  var td=document.getElementsByTagName('#board td');
  var d=document.createDocumentFragment();
  for(var x=1;x<9;x++){
  for(var y=1;y<9;y++){
    var s=document.createElement("lavel");
    s.id="p"+x+y;
    d.appendChild(s);
  }
  }
  for (var i = 0; i < td.length; i++) {
  td[i].appendChild(d);
  }
  };
  //盤の初期設定
  function ban_init(){
    for(var x=1;x<9;x++){
      for(var y=1;y<9;y++){
        field[x][y]=0;
      }
    }
    field[4][4]=white;
    field[4][5]=black;
    field[5][4]=white;
    field[5][5]=black;
    put_stone(x,y,field[x][y]);
  };

  //相手が白か黒か把握
  function get_opponent(player){
    return player*(-1);
  };


  function get_img(player){
    return (player==black)?black_stone:white_stone;
  };

  //turnの交代
  function chenge_turn(player){
    if(player==black){
      player=white;
    }else if (player==white) {
      player=black;
    }
  };


  //石を置く処理
  function put_stone(x,y,player){
  for(var x=1;x<9;x++){
    for(var y=1;y<9;y++){
      var f=document.getElementById("p"+x+y);
      switch (field[x][y]) {
        case 0:
          break;
        case 1:
          f.style.backgroundImage=get_img(player);
          break;
        case -1:
          f.style.backgroundImage=get_img(player);
          break;
      }
    }
  }
  };


};
