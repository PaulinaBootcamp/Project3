const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://heroku_l65p9lfx:7rjllpsh1qf40dcpermnc4lq27@ds311968.mlab.com:11968/heroku_l65p9lfx");

const userSeed = [
  {
    name: "Erika",
    email: "erika@test.com",
    password: "123",
    isStudent: false,
    date: new Date(Date.now())
  },
  {
    name: "Paulina",
    email: "paulina@test.com",
    password: "123",
    isStudent: true,
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " User records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


const flashcardSeed = [
  {
    flashcardName: "Apple",
    flashcardImage: "https://sc01.alicdn.com/kf/HTB1rd10aUrrK1RkSne1q6ArVVXaN/fresh-fruit-red-Fuji-apple-with-good.jpg_200x200.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Banana",
    flashcardImage: "https://fruits.nutriarena.com/PImg/Banana4Normal_200.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Pear",
    flashcardImage: "https://osmanthos.com/assets/public/images/ingredients/pear.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Cherry",
    flashcardImage: "https://static01.nyt.com/newsgraphics/2014/06/16/bittman-eat-cherry/ed5c4f4c098cd142650d7c00014e71abf85d2f86/eatopener_cherry.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Strawberry",
    flashcardImage: "https://s3.amazonaws.com/ucdim/wp-content/uploads/20180220163904/Feb_26_StrawberryDay_Body2_464456760-200x200.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Kiwi",
    flashcardImage: "https://secureservercdn.net/160.153.137.218/4b3.e44.myftpupload.com/wp-content/uploads/2007/01/Kiwi-fruit1.jpg?time=1566426384",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Orange",
    flashcardImage: "https://producemadesimple.ca/wp-content/uploads/2015/01/orange-web-600x450.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Watermelon",
    flashcardImage: "https://images-na.ssl-images-amazon.com/images/I/812c9h8-zuL._SY355_.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Peach",
    flashcardImage: "https://cdn-prod.medicalnewstoday.com/content/images/articles/274/274620/two-peaches.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Pineapple",
    flashcardImage: "https://keelings.ie/wp-content/uploads/2016/04/pineapple-1.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Grapes",
    flashcardImage: "https://verduragroceries.co.ke/wp-content/uploads/2018/07/seedless-grapes.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Coconut",
    flashcardImage: "https://qph.fs.quoracdn.net/main-qimg-6634e99ee0fa7dd16dba9952ae0d188b",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Goosenberry",
    flashcardImage: "https://gofreshusa.com/wp-content/uploads/2018/02/Depositphotos_118813434_original-1024x683.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Black Currant",
    flashcardImage: "https://www.znaturalfoods.com/710-large_default/black-currant-powder.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Mango",
    flashcardImage: "https://www.thegrowthop.com/wp-content/uploads/2019/02/GettyImages-484472040-e1549992026214.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Raspberry",
    flashcardImage: "https://milnefruit.com/images/products/raspberry.png",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Bell Pepper",
    flashcardImage: "https://images.heb.com/is/image/HEBGrocery/prd-small/fresh-red-bell-peppers-000325164.jpg",
    flashcardCategory: "Vegetables"
  },
  {
    flashcardName: "Broccoli",
    flashcardImage: "http://www.allwhitebackground.com/images/2/2385-190x190.png",
    flashcardCategory: "Vegetables"
  },
  {
    flashcardName: "Onion",
    flashcardImage: "https://images.freshop.com/111474/e2b6d602c1a4bf6c4d70a2c3c40e28d5_medium.png",
    flashcardCategory: "Vegetables"
  },
  {
    flashcardName: "Cucumber",
    flashcardImage: "https://images.freeimages.com/images/premium/small-comps/5864/58646862-cucumber.jpg",
    flashcardCategory: "Vegetables"
  },
  {
    flashcardName: "Tomato",
    flashcardImage: "https://miro.medium.com/fit/c/256/256/1*34PAEMe972M3q-guhn043Q.jpeg",
    flashcardCategory: "Vegetables"
  },
  {
    flashcardName: "Carrot",
    flashcardImage: "https://images.freshop.com/00000000045612/23950adb514ecea0e30c721c82a127e8_medium.png",
    flashcardCategory: "Vegetables"
  },
  {
    flashcardName: "Eggplant",
    flashcardImage: "https://images.freshop.com/12442/c67a1c2fcc2f844773ddb34cd5006069_medium.png",
    flashcardCategory: "Vegetables"
  },
  {
    flashcardName: "Broccoli",
    flashcardImage: "http://www.allwhitebackground.com/images/2/2385-190x190.png",
    flashcardCategory: "Vegetables"
  },
  {
    flashcardName: "Zuccini",
    flashcardImage: "https://images.freshop.com/2313267/24d567abd0d45b14a37a1cc222553304_medium.png",
    flashcardCategory: "Vegetables"
  },
  {
    flashcardName: "Lettuce",
    flashcardImage: "https://images.freshop.com/2509143/9038a480c160fc9fb888a6984e5b6706_medium.png",
    flashcardCategory: "Vegetables"
  },
  {
    flashcardName: "Cat",
    flashcardImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWmCfOACxZWEyT4Xt3Oo7W9q_CJEJd70lflFm4flG3fAu7Qakm",
    flashcardCategory: "Animals"
  },
  {
    flashcardName: "Dog",
    flashcardImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUWFRgVFRUWFRcVFRcXFxcXFxgXGBUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyYtKy8tLystLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOUA3QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQCBQYHAQj/xAA/EAABAwIEAwUHAQcBCQEAAAABAAIRAwQFEiExQVFxBiJhgZEHEzKhscHw0SMzQlJicuEUFhckU4KissLxFf/EABkBAAIDAQAAAAAAAAAAAAAAAAACAQMEBf/EACIRAAICAgMBAAMBAQAAAAAAAAABAhEDEgQhMUFRYXETMv/aAAwDAQACEQMRAD8A9xREQAREQAREQAREQAREQAREQAREQAREQAWFas1jS5xDWjUkmAFHe3TaVN1R2zQSf06nZea3N7Xujme6W5tGCQwdBxjmqM2ZY/6X4cLyfw6m77YNnLQpmoSYBPdaeg3I6wo8ZxqpTY1rn/tXCSGaNYPqT581o7TuFz4nIJH9x2H5yWrvqD3S97oLjPiSVinyZ6/tm2HHht+kXq+OVpH7Wp5PKlZ2uuGj4iY5hp+ZErRmi4CfiHCNY6hSW5B68Qsf++RP1mv/ABxteHRH2iGmAatHMI+Jro+RXQYP2wtLhstqZHDdj+6R57HyK4Rtk17S1wkHguRw6xNrePptJyS14nk6QR6hasXKyV27M+TiYn0lR+haNZrhLXBw5gyFmvKxiLqRD6biCOI+hHELp8J7d0XgCqHMdxIaXMPjpqPRa8XLhLqXRjycOce49o61FBaXlOqM1N7Xj+kzHXkVOtSd+GVpr0IiKSAiIgAiIgAvjnAbrCtVyjx5LVXVwVDdEpWbVtdp4qRaS2LzsFum7KE7Bqj6iImICIiACwrVWtBc4hoG5JgLNcR7QL1wcymNspcOpkfb5lV5cmkbLMWPeVGHarHqdYspMJLJlxiAT/D5b/JVH1dmjgvJKdS4Zfimaj3guEjMS0gjMNNtARtyXq+E09BPxHT12H0XPz7bK/p0MOqj18Nnh9qDR1/jeT5DT7LX4w9ugBHieS2mNfsmMaNIEH86rhe0r3kZWnU6TwaDAzeUqdLlr+CIvrYpv7U2jKxYLgNMwSWksnjLo08109MNqgEgSRIc3UOHMELyWwy0akuoUawFN1N9KtMNcT+9HEnSQ4cz4FdR2MtbijTJDzkfJpUXjWABNRvFrXOOUDjBI2lNl4i1uJGPlNypnZtaW9OC0WKMmsSOYHoCf/YLf21UlkvBBGpB3WpZDjm5gu9Tp9lz6NyfZQv7ggEHhoqvZq4LpnmT1CuYjaSdOAWq7PtNN7mO4THQ/wCCmiklZNt9HXU700y33Zyv/maYPnzXofZrEXV6OZ4hwcWE6Q6IOYAbb+oK80wfC61wXGj8R7ocR3WcC93MCCQOML1XCcPbQososmGCJO7ju5x8SSSeq6HDU32/Dnc1w8XpbREW854REQAUN3cBjZPHQdVMvNvap2lNAim34gzNHWf0CTJLVWPCOzo6i4xWmJLntHUgKbDWCsM4Ms4EbO6eHivzHhdWtfXtG3LnH31ZrXa7MLu8RyhuYr9Z21BtNjWMAa1oDWtGwAEAIim+2Eml0jJjABAEBZIicQIiIAIiIALzr2mkitSI4UyY6OMdTJC9FXlnbrt9QpXXu6NIV61IFjnEwxjpMtGnecDvy25qrNDaNFuGekrKnZjsZUNT39U6xAkAZR48XOjRehWGFU6cQJI4leO1/aBfte11dgDSdGhpbPReo9lcebdUhUbGo855KvRJ2yxzk1SLOO4fmaXb7yuAo2klzOsdOXzXq51EFcziuDAOzsEc/wBVn5ONp7xNHGyqtJHAf7NDNuRygwfULdYdYNp7aniTJJ5Ek6nzW2baukShpkaBZnknJU2zRrGLtJEd0wZHH+k/Rctb1CIE8B9F1b3dx0wPouV91Pebtt6KqadWWY5K2i0YI+f58lQq2he8NYJe4wIE7/hVwUzxIaOLiYAXo3ZzszTtwHkh9SPi4D+39VZhwSyPrwjNyI4l+y72dwoW9FrP4t3n+qPstmiLtRioqkcSUnJ2wiIpICIiAC8F9p7zWvnuHwjugz3SA3KfmF70vE+0Nv36mx1dpzGv55LNyJapGjjxts5n2V4Vlxi3c7gXkTz9w8eshfpJfnnBK3+nuqFeP3bxPPLs7/tlfoVjgQCDIIkHmFPHybphyMejR9REWgzhERABERAHwlflftXSP+suNMv/ABFXLxJbmzNJjjDvNfqd4kEcwvCe3+BNNVzgIqcfEg/PglkPE4Kys3GoG1LgPZuMhLiTwaGmMpniV7b7P7T3dFsk8yF5rgWGNDw4QQTvoSNdQYOh/wAr1jBK4ygNnyHgq5Oy6KpWdBUrHgT8vup2MBEqi1kwdR59Nwo8SxplARq55EhjdXGN4H56qGrFv8Fm4oDitbcZRwk/NWrS9FdmYgtHiIIWBDRoAPNVvEmOsjRzlyXQeA/OK5auKjHnIYB3GhE9Cu+u7ckRt9Fzt7a6wN+J+yzyhRfDJZo8riAHEmTuV7Lgb5t6X9gHpovLa1tkLTz26cSvWbBmWmwcmj6K/jf9Mp5PiJ0RFsMgREQAREQAXkXaAxVqAwO+6B5nReoYtibLemXvP9reLjyC8nqtNSq6od3uLue5mFh5kl0vpt4cX2/hrDZueZDfPZd/2dxq4bSZRDGvLRAcSdG8AQOW0rR2tuSQOa7zCrMMYNFVxlK+mXcmUa7RJa1bg6vLB4NafqSrgqO5oAvhW9dHPfZ9NUqKtdZRLnQPGF9cYXFdpseDpps24nf0VeXMoK2WYsTyOkbS+7ZMZ8Mv+QWhvPaBXM5G028jBJ9SY+S56t6qjcMn809VgfJyP6dCPGxr4dNS9oFy0y4scORYB9I8VBedo6F44Mr0mNL+6ajZAG0SDw5mVyF0NFSFuTOum5PRPHPL8kSwQ+I6G97GtpvOQhumgOhHQ8Vt8F7NV2kFld7YiZcTIA2yuMAbaKhg/aGq2lDw2o1o7ofJIA4T5LP/AHgVRo2iwHq4rSssTM8cvDtqdnXiHVp22aBsrNOzptdm3dz3PquTwrtq90GpTbEalkgjUcyZ3XS4bi1Oq0FsiRMEQnjOMvCmUJR9LrrjWA0gdFm0jcgqsy7IJlunAhX7es1w0TikTmZhGyiGHNmYnqrxGqydtooaQWzisZ1qkxyA6D6L0awdNKmebGn5BcP2gszlDmjWdTxhdV2brE0WA7ho9OCqwprI7+lmVp40bVERazMEREAFBfXbaTC95gD1J4AeKnXFdrrs1aopNPdp7+Ljv6DT1VWbJpGyzFj3lRpMUvXV6he//pE6NHISsKdEHXTovtSll2M+QVmi2Vx5ScnbOskkqRJYsOYAc121tMCVq8HsmAB3H85LctC38fG4q2YORkUnSMliVko3FaTMa3HrnJRcZjSF5lUeSSeevJdV21xGT7oHbVy5EnkuTysm06Xw63Fx647f0xc783VasrEKvWH5sqEzTRr6up4/NZXdOAGDqeHkrNpT708Br5rNtuXPA4k7xKtj6JIuvwsstgQBMSfNck6mc/FewULAe7DTrprP6Lnsf7PNHeY3rGy2zx0rRhhmTdM5nBtA5p3Pw7THH7LosLqPaR/nn/8AVq22Z0IkEaz+eS6LCIdA0nl9zzCrhKmWTjaOjtXZgFYpNgr7QoAARqrDKcrejAZsbKkcz8/ysmgc1kXFSQULhmYwdhwV3D+64en58lD7vVSTBB5aoRDNwiIrBAiIgDCrUDWlx2AJPkJXm9CoXFzidXEuPnqu8x4xb1f7CuEtqWiwcyXaRt4i6bMssqemzwWDRCnpO1WA3HQ4TTIaFslVsSMohWZXWxqoo5WR3JmSrXVSGk8grCq3rZaeiaXgq9POMW7z3E6kla0M8/Vbe8pQ4zzVFzN1xWjtKXRRIUVRs+CsPYoqtMxyS0NZjZ09D4mFt+zVvnuNR8Inz/CtXh5hp6rqux1t+8qERmMDxhasEbmjNnlUGdKKaxqWwcIKtsYsixdOjmGlODN2hR//AI2Uy3SPn4dF0QZK+5FW8UWWLLJFe1Et2g8QjqakOhUhIOqsQjZWazxUgcsvdqNz+CkhgOXyqsmNR7UEG4YZAPgslDaHuDoplYIEREAaDthfZKIpj4qhjo0ak/Qea5ujoB+fdWu1lcOuY/kaG+Zl33CpU3Lk8me2R/o6nHhrBEp1X0gjh+iUm6rY29rJVCi5eFzkomzwgnIJEK9mUFMECGg6cgoDdgLrQi4xSOZJ7SbNg0qOq2VA2us/fAphaOaxjCTJI2XPvoEaEL0VzQVSq2jDu0eiyz4ybtGiHJaVM4OlYOeTA+ip3FvEghejtt2jYALR43hWdzcogEgHzKpycalaLsfJt0zl8Cw59Wcrf4t+A816FZWYYxrRwCms7ZrGhrRAAgK82ktWLCsf9MubM5v9EbGrPKvhZyXwvjdXFJ92WUg7KI1gsfe8kEkj6cr42ks6dRSNeFIELqZUYoKxVfCgNYEoAmaxQ1XBZudOy+UKJc7wG6kUv2rYYOn11UqInFCItb2jxEW9vUqcYyt8XO0b8zPkobpWyUrdI5Vtka76lRvGo4zOnxGPlCvWuBv/AIoHmoex1zLcvLZdVKwwwwmtmbMmacHqjWswtoUtO3AMN3KtAlxgeZ5KzRohvXiVohhiu0iiWWT9ZlTYAICq3liHajR31VxFeU2c6aRC+FxW1xCkNDz3VBzEjRYmRsrwpxUBVb3S+soOPwgmOSgkzcoyVi9xGhBCxoauhQBsbdqtNUVBuimhShTF7lUqvcdlZqBUKtwBoN0EoxeI3RtRYMBO6mDFBJkx6yfVWACwjVAHwvPEo0rB6yFNAEzHLYYd8J6/YKlRaVesNndfsmQjLSIicU+PcACSYA1J5Bec9qsRdc1A0aUqerR/M7bMfnC6rthde7oD+p4afQu+rQuYwywNR31Kxcqcm9EbeNBJbs2PZGkGt8ei6Nzp0G5VXDsPbTG8lbG1p65vIfdW4YNRSZTmknJtE1GkGiB5+KzRFoKAiIgDXX1WXRy+qgaF9uGEPPWfVZNCUYjLFs7SjlbHHcqtaMl3TVX1KRDPjmg7iVWuLdoEhoBngIVpQ3Ow6ofgIha1fYWULEpCSKuxxBDd1rXWxG7SFvLfiplOthdHPM0WeZbt1Jp3aD5LAWzP5R6I1J2NVSYXbAlXaNj/ADegV0BfVKiQ5HO1ac1DyBIHqrTaa+vZFR3X66qw1qUaz4BAViyb3Z5mVDW0CuUmwAPAKYiMyRETkGr7Q2IrU2tP/Ma70n7SvljZNpjuq7djQdfsVG1VuK2ssUnrQe2dBxVpjYAHJQ0R3vJWE0RGERExAREQBDc0cw8Rt+ipALZqjWbDj6qGShauh2vEK8tZUHFbClUDhIQgZmobjgplBcHYIfgIxC+OX0BCkYyMrY7qdQ243UyePgr9CIikgIiIA113pU6gKRiYgyS3z+y+0hAVb9H+C5bLVcCqOOoHiraaIrCIiYgrXTtlG1yxu6gzdNFX/wBQFW32WJdGwt9yp1Rt64B1O6ugpo+CM+oiJiAiIgAorhkjxClRAGuJUbK2QyNuIX26bBj0WtvblrIk7kDfSTsFXdDpWdHSqhwkGVFUPePkuWvcVbR705Tma0TxLiAAI3MnZdDbVS4SdCY+inayNaLC+OXwuWO6UksURp81IgRWiBERABERAEF23SeRUbQrFb4T0UDUkhkYj4h1VxVSFNSqT1REhkiIicg5vtNi1K3cPePazMJBJ34aDitdhWJe+aKoiCTlgGS2YBM8xr5ro8fwOjeUjSrtlsyCNHNI4tdwPDzXOXvs4ova1jbu7pNY0NDWVGZSBtILFXKNjxlRsHXbMwGYEg66jlqIW3wm6D2uhwMO4cAQCJXLD2a0PdMpG5usrcx0fTaXFxBOYinPDhC67D7CnRbkpMDG6aDjDQ0E8zla0eQRGLTCUk0WURFYIEREAEREAYVqLXCHCQtNe9krSq9r6lNznNMt/bVgAeYaHx8lvEQBzl52NsnOFV1JznM1ZmrVi1p4EMz5fktgyoGiN4WxqNkEc1yGM4s2gXNL2hw/hnvHy3SS6Hj2bw1ZBPJfW3Q0HE7LmcDxStUo5quUOOpyiA0HZpniNifBY2WIVKlw8B1M0aZAblac4cQc0uzdNI5JBzuaNTMJWa5rs7ib3VXUnFrwPeZnDTK5pYWNjxY868C2F0qtTtFTCIikgIiIAjuAcpjUxoFSp1CdwQeRWxVHFKTyM1MBzhpBMSOp5JZKyUzBzzK+OcQVr6tSuBJoP8cuV/8A4uXJ9pad3dhtFlvcUw1wqGsWAAFmoGUmTOo02VfY/R6BRuSD3jp4/qry4C1q3XuBSrUKtWo6abyKZa3ISRmJed8scTK7HBcP9xRbTkugCSTJ2jfoAni2LKi8iInFCIiACIiACIiACIiACIiAC02Odl7W7IdWplzgMocHuaYmY7pHNblEAcriPYWjVpimK9zSYNIp1G6jxL2OJ9VFhfs/o0Gvay4ue+ACc9OZHERT3XXoopE2ajs92epWjXimXuL3ZnOeQXE+QH4Ft0RSQEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAf/Z",
    flashcardCategory: "Animals"
  },
  {
    flashcardName: "Lion",
    flashcardImage: "data:image/jpeg;base64,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",
    flashcardCategory: "Animals"
  },
  {
    flashcardName: "Chicken",
    flashcardImage: "http://haibrothersgroup.com/hbmeat/image/cache/catalog/product/chicken-live-400x400.png",
    flashcardCategory: "Animals"
  },
  {
    flashcardName: "Tiger",
    flashcardImage: "https://pngriver.com/wp-content/uploads/2017/12/download-Tiger-PNG-transparent-images-transparent-backgrounds-PNGRIVER-COM-PNG_tiger-poto-Transparent.png",
    flashcardCategory: "Animals"
  },
  {
    flashcardName: "Whale",
    flashcardImage: "https://www.redworldtoys.co.uk/wp-content/uploads/2014/05/sperm-whale.jpg",
    flashcardCategory: "Animals"
  },
  {
    flashcardName: "Turtle",
    flashcardImage: "https://cdn2.webdamdb.com/1280_EdNqFCk8lR98.png?1539707027",
    flashcardCategory: "Animals"
  },
  {
    flashcardName: "Dolphin",
    flashcardImage: "https://pngriver.com/wp-content/uploads/2017/11/Dolphin-free-PNG-transparent-background-images-free-download-clipart-pics-PNGPIX-COM-Dolphin-PNG-Transparent-Image-001-1024x929.png",
    flashcardCategory: "Animals"
  },
  {
    flashcardName: "Zebra",
    flashcardImage: "http://kindersay.com/files/images/zebra.png",
    flashcardCategory: "Animals"
  },
  {
    flashcardName: "Swan",
    flashcardImage: "https://pngriver.com/wp-content/uploads/2018/04/Download-Swan-PNG-Clipart.png",
    flashcardCategory: "Animals"
  },
  {
    flashcardName: "Pig",
    flashcardImage: "https://www.purinamills.com/2.purinamills.com/media/Images/MasterBrand/Lifestages/swine-grow-finish.png?ext=.png",
    flashcardCategory: "Animals"
  },
  {
    flashcardName: "Cow",
    flashcardImage: "https://www.purinamills.com/2.purinamills.com/media/Images/MasterBrand/Lifestages/dairy-cow.png?ext=.png",
    flashcardCategory: "Animals"
  },
  {
    flashcardName: "Elephant",
    flashcardImage: "https://i0.wp.com/freepngimages.com/wp-content/uploads/2016/11/elephant-png-image.png?fit=800%2C800",
    flashcardCategory: "Animals"
  },
  {
    flashcardName: "Hamster",
    flashcardImage: "https://s7d2.scene7.com/is/image/PetSmart/5081325?$sclp-prd-main_large$",
    flashcardCategory: "Animals"
  },
  {
    flashcardName: "Bunny",
    flashcardImage: "https://media.istockphoto.com/photos/white-rabbit-picture-id177258797?k=6&m=177258797&s=612x612&w=0&h=o8_GlE3EeP1VhKDYHtbCVP1ixj4R2SffDyuJkHXuEXE=",
    flashcardCategory: "Animals"
  },

];


db.Flashcard
  .remove({})
  .then(() => db.Flashcard.collection.insertMany(flashcardSeed))
  .then(data => {
    console.log(data.result.n + " Fruit records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const essaySeed = [
  {
    essayImage: { type: String, required: false },
    essayInstructions: { type: String, required: true },
    essayAssigned: { type: Boolean, default: false },
    essayGraded: { type: Boolean, default: false },
    essayDue: { type: Date, required: false }
  },

];

db.Essay
  .remove({})
  .then(() => db.Essay.collection.insertMany(essaySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const unitSeed = [
  {
    title: "Introduction",
    section1: "Greet the students as they enter the classroom and gesture for them to sit down. Greetings & names. When everyone has sat down and is ready say, `My name is...` and give your name. Then tell everyone to stand up. If there is room, have everyone form a circle. Take a ball and hold it and say your name. Then throw the ball to one student and they say their name. Students throw the ball around randomly, saying their name each time they catch the ball.hen, play the same throwing game, but instead of saying your name, say the name of the person who threw the ball to you - start by asking one student to throw the ball to you and as you catch it say their name. Then throw to another student and they should say your name as they catch it. If anyone gets a name wrong (or can't remember) they have to sit down for 3 throws. By the end of the activity everyone should have a good idea of everyone else's names!",
    section2: "Have your students draw a stick man / woman on a piece of paper with their name underneath, and write down their answers to the questions on the board - basically doing the same thing as you did on the board. Then put students in pairs and have them practice asking and answering the questions about themselves. As they do this circulate and monitor, helping out with mistakes and pronunciation, and always give lots of praise.",
    section3: "We will finish the lesson with a fun activity based around the vocab of classroom stationery. Before class, prepare a box of loads of different classroom stationery (pen, pencil, eraser, crayon, ruler, stapler, staples, glue, paper, folder, hole punch, pencil sharpener, white out, scotch tape, pencil case, marker, calculator, etc.).",
    date: new Date(Date.now())
  },
  {
    title: "Morning Routines",
    section1: "Start with a guessing game. Before class print out the flashcards for morning routines. Start with an easy one – `brush my teeth`– look at the card but don’t show it to anyone. Do the action for brushing your teeth and ask `What am I doing?`. It’s ok if the students answer in their first language – whoever answers first is the winner. Try and elicit the English or if not, teach `brush my teeth`. For the next card, the winner can look at the card and do the action. Again, elicit / teach the English. Continue until all the cards / actions have been guessed.",
    section2: "Put the cards back on the board, at a height that everyone can reach. Model the game first – select a student and say `Touch put on my shoes`. The student should go to the board and touch the correct card. Then get the student to do the same for you. When everyone has got the idea put them in pairs and get each pair to stand at the other end of the room. In pairs, each student says a verb phrase as their partner runs to the board and touches the right card.",
    section3: "To finish the class, get together the morning routines flashcards and also any other action verb flashcards you have used in previous lessons. Divide the class into 2 teams. One student comes to the front of the class and acts out the flashcard you show to him/her. The first person to shout out the correct answer wins a point for his/her team.",
    date: new Date(Date.now())
  },
  {
    title: "Fruit",
    section1: "If you can, get small plastic fruit (can be bought quite cheaply from children’s stores, such as Toys ‘R’ Us). Put the 8 fruit into a small box before the class. Now take out the box and shake it – the rattling sound will instantly alert your students. Open the box and pull out a fruit. Ask What’s this? Elicit / Teach the name and chorus x3. Now mime biting the fruit and chewing, and then say Yummy!. Then hold the fruit in front of each student to let them take an imaginary bite. Encourage them to say yummy! or even yuk!. Repeat with the other fruit.",
    section2: "Try and take enough plastic fruit pieces for each student (e.g. if you have 16 students you need two of each plastic fruit – if you don’t have enough plastic fruit use our fruit flashcards instead). Throw the fruit around the classroom. Model the activity: say (Your name) give me a/an (apple). Get up, find the fruit and put it into the box. Now hold the box and instruct a student to pick up a fruit, bring it back to you and put it in the box. Do for each student in the class.",
    section3: "Play Fruit Rope Jump game Play 'Fruit Rope Jump' gameTake a length of rope, and lay it across the floor at one end of the classroom. On one side place the 8 plastic fruit and the box. Have your students line up on the other side of the rope. Model: '(Your name), put the (apple) in the box'. Run up to the rope, jump over the rope (say 'Jump!') select the correct fruit and put it in the box. Now instruct each student to do the activity.",
    date: new Date(Date.now())
  },
  {
    title: "Emotion",
    section1: "On the board draw a large circle. Then draw two eyes, ears, nose and a smiley mouth. Do the same facial gesture and say ‘I’m happy! Happy, happy, happy’. Get everyone to chorus ‘happy’ and do the facial expression. Then erase the mouth and draw a sad mouth (and maybe a tear under one eye) and teach ‘sad’. Do the same for the rest of the vocab (hungry, angry, scared, sleepy - use the flashcards as reference).",
    section2: "Invite a student up to the front of the class and give him/her the chalk/marker. Whisper a feelings word (e.g. ‘angry’) and get him/her to draw the face in the circle. If he/she is having difficulty, show him a picture or flashcard. Invite the class to shout out the answers – the first student with the correct answer can draw the next picture.",
    section3: "Put students in pairs and give each pair a large, blanksheet of paper. Have each pair draw circles on the paper. Then have them in turns draw faces with different emotions for their partners to guess. At the end of the activity invite some students to show the rest of the class their pictures and say what the feeling words are (or get the others to guess).",
    date: new Date(Date.now())
  },
  {
    title: "World",
    section1: "Walk around the room and stick the pieces of colored paper to the walls as you walk around. Say each color word as you stick them onto the walls and make sure they are at a level your students can reach.Now model the game: say ‘Touch green!’ and show everyone how you look around the walls for the green paper, then run and touch it. Encourage your students to do the same. Now have everyone stand up in the middle of the room. Say different colors as your students run around touching the colors.",
    section2: "Get a big piece of blank paper (A3 or bigger if possible). Have everyone sit in a circle around the paper with their crayons. Say, ‘Everyone draw a (blue) line’, and model taking out a blue crayon, drawing a nice blue line on the paper and then putting the crayon back into your pencil case. Get everyone to follow suit. Continue with all the colors. In the end you will have a nice abstract piece of artwork!",
    section3: "Now we have two defined categories (sky and land) we are going to provide some new words for those categories. Before class, prepare two large A4 envelopes (color one green for land and one blue for sky) and flashcards for sun, moon, stars, mountain, sea, river, cloud, rainbow, lakes, fields, forest. Pin both of the envelopes to the wall, opened, with the green one low down on the wall (to represent land) and the blue one higher up (to represent sky).",
    date: new Date(Date.now())
  }
];

db.Unit
  .remove({})
  .then(() => db.Unit.collection.insertMany(unitSeed))
  .then(data => {
    console.log(data.result.n + " Unit records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });







