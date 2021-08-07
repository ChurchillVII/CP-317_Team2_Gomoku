class cell{
    constructor(id, state){
        this.id = id;
        this.state = state;
    }
    set_state(state){
        this.state = state;
    }
    check_state(){
        return this.state
    }
}