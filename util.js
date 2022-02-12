
export function stashStorage (){
    Storage.prototype.stashContent = function (){
        const entries = Object.entries(this);
       this.clear();
        return entries;
    };
    
}

export function restoreStorage(){
    Storage.prototype.restoreContent = function (contentStorage) {

        this.clear();

   for (let [key, value] of contentStorage){
       this.setItem(key,value);
    }
 
};
}
