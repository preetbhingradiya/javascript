    // let pro1 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(3);
    //   }, 2000);
    // });
    // pro1.then((val) => console.log(val))

    // let pro2 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     reject(new Error("item is not fullfilde rject"));
    //   }, 2000);
    // });
    // pro2.catch((error)=>console.log(error))

    // multipal promise //

    let pro1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(3);
        }, 2000);
      });
  
      pro1
        .then((val) => {
          console.log(val);
          let pro2 = new Promise((resolve, reject) => {
            resolve("all are done");
          });
          return pro2;
  
        }).then((val) => {
          console.log(val);
          let pro3=new Promise((resolve,reject)=>{
              setTimeout(()=>{
                  reject(new Error("some error is define"))
              },3000)
          })
          return pro3
        }).catch((error)=>{console.log(error)})