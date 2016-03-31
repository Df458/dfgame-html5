class Animation
{
    // TODO: Implement this
}

class Spriteset
{
    constructor(path, name)
    {
        // TODO: Implement this
    }
}

class Sprite
{
    constructor()
    {
        if(arguments.length == 1) {
            this.set = arguments[0];
        } else if(arguments.length == 2) {
            this.set = new Spriteset(arguments[0], arguments[1]);
        } else {
            return;
        }

        this.position = 0;
        this.playing = false;
    }

    update()
    {
        // TODO: Implement this
    }

    play()
    {
        // TODO: Implement this
    }

    pause()
    {
        // TODO: Implement this
    }

    stop()
    {
        // TODO: Implement this
    }
}
