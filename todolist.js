function ElementBuilder(name) {
    this.element = document.createElement(name);

    this.text = function (text) {
        this.element.textContent = text;
        return this;
    }

    this.type = function (type) {
        this.element.type = type;
        return this;
    }

    this.appendTo = function (parent) {
        if (parent instanceof ElementBuilder) {
            parent
                .build()
                .appendChild(this.element);
        }
        else {
            parent.appendChild(this.element);
    }
        return this;
    }

    this.placeholder = function (text) {
        this.element.placeholder = text;
        return this;
    }

    this.hide = function () {
        this.element.style.display = 'none';
        return this;
    }

    this.show = function () {
        this.element.style.display = 'block';
        return this;
    }

    this.className = function (className) {
        this.element.className = className;
        return this;
    }

    this.onclick = function (fn) {
        this.element.onclick = fn;
        return this;
    }

    this.html = function (htmlvalue) {
        this.element.innerHTML = htmlvalue;
        return this;
    }

    this.value = function (value) {
        this.element.value = value;
        return this;
    }

    this.build = function () {
        return this.element;
    }
}

const builder = {
    create: function (name) {
        return new ElementBuilder(name);
    }
}
class Task{
   constructor(name) {
       this.name=name;
       this.id=Math.random();
       this.completed=false;
   }
   toggle(){
   this.completed=!this.completed
   }
}
class Todolist{
    constructor(){
        this.tasks=[]
    }
    add(name){
        const task=new Task(name);
        this.tasks.push(task)
    }
    remove(id){
        // this.tasks=this.tasks.filter(item=>item!==id);

       const index=this.tasks.findIndex(item=>item.id===id);
       this.tasks.splice(index,1)
    }
   
}
class TodoListApp{
    constructor(input,addBtn,list){
        this.todolist=new Todolist();
        this.input= input;
        this.addBtn=addBtn;
        this.list=list;
    }
init() {
    this.addBtn.addEventListener("click",()=>{
        const name=this.input.value
        this.todolist.add(name);
        this.paint();
        this.input.value=''
    })
   }
   paint(){
       this.list.innerHTML=''
       this.todolist.tasks.forEach(element => {
           const li=document.createElement('li');
           li.textContent=element.name;
           li.onclick=()=>{
               element.toggle();
               this.paint();
           }
           if(element.completed){
               li.className='checked'
           }
           const remBtn= document.createElement('span');
           remBtn.textContent="X";
           remBtn.className='close';
           remBtn.onclick=()=>{
            this.todolist.remove(element.id);
            this.paint();
           }
           
           li.appendChild(remBtn);
           this.list.appendChild(li)
          
       });
   }
 }
 const app=new TodoListApp(
    document.getElementById('myInput'),
    document.getElementById('addBtn'),
    document.getElementById('myUL')
 );
 app.init();
//  const makeCounter=function(){
//      let privateCount=0;
//      function changeBye(val){
//          privateCount+=val;
//      }
//      return{ incriment:function(){
// changeBye(+1)
//      },
//      decrement:function(){
//          changeBye(-1)
//      },
//      value:function(){
//          return privateCount
//      }
//     }
//  }
   
