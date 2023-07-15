const show = async () => {
    let pro1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("1234");
      }, 2000);
    });


    let pro2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("4321");
      }, 5000);
    });

    console.log("first promise are run...");
    let val=  await pro1;     //await function ko wahi roke deta he execute nahi hone deta
    console.log("first promise is complate :" + val);

    console.log("seconde promise are run...");
    let temp=await pro2;
    console.log("seconde promise is complate :" + temp);
  //   return[val,temp]
  };
  let store = show();