function sortedList(){
    return {
        list: [],
        size: 0,
        add(element){
            this.list.push(element);
            this.size++;
            this.list.sort((a,b)=> a - b);
        },
        remove(index){
            if (index >= 0 && index < this.size){
            this.list.splice(index,1);
            this.size--;
            this.list.sort((a,b)=> a - b);
            }
        },
        get(index){
            return this.list[index];
        }
    }
}
let list = sortedList();
list.add(15);
list.add(5);
list.add(6);
list.add(11);
list.remove(1);
console.log(list)