export default
class Behavior {
    behavior : Behaviors;
    constructor(behavior=Behaviors.none) {
        this.behavior = behavior;
    }
}

export
enum Behaviors {
    none,
    executeCode,
}
