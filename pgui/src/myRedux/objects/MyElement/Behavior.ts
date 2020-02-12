export
enum Behaviors {
    none,
    executeCode,
}

export default
class Behavior {
    behavior : Behaviors;
    constructor(behavior=Behaviors.none) {
        this.behavior = behavior;
    }
}
