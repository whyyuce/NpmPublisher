module.exports=()=>{
  return  new Date().toLocaleDateString("tr-TR").replace(/[.]/g,"/");
}