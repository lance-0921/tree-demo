const CreateTree = value =>{
    return {
        date:value,
        children:null,
        parent:null
    }
}
//创建树就是创建一个节点，给出值就行


const addTree = (node,value) =>{
    const newNode ={
        date:value,
        children:null,
        parent:node
    }
    node.children = node.children || []  //做个保底，节点可能为空也不能为自己，如果不是空，就让它等于自己
    node.children.push(newNode)
    return newNode   //返回节点,为子树在加新的节点
}
//增加节点，创建一个新的节点（children），添加到已知的节点上（parent）


const removeNode=(tree,node) =>{
    const siblings = node.parent.children   //这个节点的父亲的所有儿子，之前写成tree.node.children报错，因为这是找它的儿子了   
    let index = 0
    for(let i = 0;i < siblings.length;i++){
        if(siblings[i]===node){
            index = i
        }
    }
    siblings.splice(index,1)
}
//删除的节点重点是，找到节点的parent，遍历里面的child,然后删除这个child的内存地址，不能将其名成null

const travel = (tree,fn) =>{
    fn(tree)
    if(!tree.children){
        return
    }
    //如果children为null，什么也不做
    for(let i=0;i<tree.children.length;i++){
        travel(tree.children[i],fn)
    }
}
//先把根节点遍历一遍，再把子节点作为一颗树遍历一遍


 const tree = CreateTree(10)
 const node1 = addTree(tree,20)
 const node2 = addTree(tree,30)
 const node4 = addTree(tree,40)
 addTree(tree,50)
 addTree(node1,201)
 addTree(node1,202)
 addTree(node1,203)
 addTree(node1,204)

const fn = node =>{
    console.log(node.date)
}
travel(tree,fn)

console.log(tree)
removeNode(tree,node2)
removeNode(tree,node4)
travel(tree,fn)