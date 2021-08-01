//最小值函数
let minNum = arr =>{ 
  let min =arr[0]
  for(let i=1;i<arr.length;i++){
     if(arr[i]<min) {
       min = arr[i]
     }
  } 
  return min
}


//选择排序
let minIndex = arr =>{
  let index=0
  for(let i=1;i<arr.length;i++){
    if(arr[i]<arr[index])
    index=i
  }
  return index
}
let selSort = arr =>{
  if(arr.length>2){
    let index = minIndex(arr)
    min=arr[index]
    arr.splice(index,1)  //使用splice，其返回值是被删除元素组成的数组，arr被改变了
    return [min].concat(selSort(arr))
  }
  else{
    return arr[0]<arr[1]?arr:arr.reverse()
  }
}

//快速排序
let quiSort = arr =>{
  console.log(`_ _ _ _ `)
  let k=arr.length
  if(k<2){return arr}
  let pivot = Math.floor(k/2)
    console.log(`pivot:${pivot}`)
  let left = []
  let right = []
  let p = arr[pivot]
   console.log(`基准:${p}`)
    arr.splice(pivot,1)
  for(let i=0;i<k-1;i++){
      if(arr[i]<p){
        left.push(arr[i])
    
      }else{
        right.push(arr[i])
    
      }
    }
console.log(left)
console.log(right)
  return quiSort(left).concat([p],quiSort(right)) 
}


//合并排序
//先写合并函数，分开函数用递归
let merSort = arr =>{
  let merge = (a,b)=>{
    if(a.length===0){return b}
    if(b.length===0){return a}
    if(a[0]<=b[0]){
      return [a[0]].concat(merge(a.splice(1),b)) //踩坑，a[0]是个number，不是array，要加一个[],否则不能使用concat
    }
    if(b[0]<a[0]){
      return [b[0]].concat(merge(b.splice(1),a))
    }
  }  
  if(arr.length<2){return arr}
  let pivot = Math.floor(arr.length/2)
  let right =arr.splice(pivot)
  let left = arr
  return merge(merSort(right),merSort(left))
}
  
  // for(let i=0;i<arr.length;i++){   //想写一个merge，但是思路错了。
  //   if(left[0]<right[0]){
  //     return [left[0]].concat(merSort(left.slice(1)),merSort(right))
  //   }else{
  //     return [right[0]].concat(merSort(right.slice(1)),merSort(left))
  //   }
  // }


  //计数排序

let cunSort = arr =>{
  let hashTable ={}
  let max=0
  let result =[]
  for(let i=0;i<arr.length;i++){
    // if(arr[i] !==hashTable){      //判断一个数是否在hashTable里面的表达式错误
    //   arr[i]=1
    // }else{
    //   arr[i]+=1
    // }
    if(!(arr[i] in hashTable)){
      hashTable[arr[i]] = 1
    }else{
      hashTable[arr[i]]+=1
    }
    if(arr[i]>max){
      max=arr[i]
    }
  }
  console.log(hashTable)
  for(let j=0;j<max;j++){
    if(j in hashTable){
      //for(let i=0;i<j.value;i++){  //表示hashTable里面某个key的值方式错误
      for(let i=0;i<hashTable[j];i++){
        //console.log(`${j}`)
        result.push(j)
      }
    }
  }
  return result
}

//冒泡排序

let bubSort = arr =>{
  // let swap = (a,b) =>{
  //   temp = a
  //   a=b
  //   b=temp
  //   return (a,b)
  // }   //这种方式没有将存储变量的地址交换，达不到交换效果

  let swap = (array,a,b) =>{
    //temp = array[a]   //新变量声明复制忘写let
    let temp = array[a]
    array[a] = array[b]
    array[b] = temp

  }
  if(arr.length===1){return arr}
  for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
      //swap(arr,arr[i],arr[i+1])  //参数是元素对应的索引，而不是元素本身
      swap(arr,i,i+1)
    }
  }
  k=arr.splice(arr.length-1)[0]
  let r = []
  r.push(k)
  console.log(k)
  console.log(arr)
  //return bubSort(arr).concat(k)  //踩坑，k是个简单变量，返回出现错误
  return bubSort(arr).concat(r)
}

//插入排序
let insSort = arr =>{
  if(arr.length===1){return arr}
  if(arr[0]<arr[1]){
    swap(arr,arr[0],arr[1])
  }
  if(arr[2]<arr[1]){
    swap(arr,arr[1],arr[2])
  }else if(arr[2]<arr[0]){
    swap(arr,arr[0],arr[2])
  }

}