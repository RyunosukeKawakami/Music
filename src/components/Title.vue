<template>
  <div>
      <img id="back" src="@/assets/back.jpg"/>
      <h1 id="welcome">Vue Musicへようこそ！</h1>
      <h2 id="sub">好きな曲を探してみましょう！</h2>
  </div>
</template>

<script>

</script>

<style>
#back{
  height:1024px;
  width:1800px;
  opacity:0.3;
}

#welcome{
  text-align:center;
  font-size: 50px;
  letter-spacing:4px;
  position: absolute;
  font-weight:bold;
  color:#01ffc3;
  top: 45%;
  left: 35%;
  text-shadow: 1px 1px 2px #212529;
  animation: fadeIn 3s ease 0.3s 1 normal;
  
}

#sub{
  text-align:center;
  vertical-align: top;
  font-size: 35px;
  letter-spacing:-2px;
  position: absolute;
  font-weight:500;
  color:#00CC9C;
  top: 52%;
  left: 38%;
  text-shadow: 1px 1px 2px #212529;
  animation: fadeIn 3s ease 0.3s 1 normal;
}

@keyframes fadeIn { /*animation-nameで設定した値を書く*/
    0% {opacity: 0} /*アニメーション開始時は不透明度0%*/
    100% {opacity: 1} /*アニメーション終了時は不透明度100%*/
}
</style>
