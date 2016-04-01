class Animation
{
    constructor()
    {
        this.orients    = 0;
        this.dimensions = [0, 0];
        this.origin     = [0, 0];
        this.length     = 0;
        this.delay      = 0;
        this.autoplay   = false;
        this.autoloop   = false;
        this.speed_mod  = 1;

        this.atlas_box = [0, 0, 0, 0];
        this.handle = "";
    }
}

class Spriteset
{
    constructor()
    {
        this.atlas           = new Texture();
        this.animations      = [];

        if(arguments.length >= 2)
            load_resource_to_buffer(arguments[0], arguments[1], function(request, user) { user.prepare(request.response) }, this, "document");
    }

    prepare(doc)
    {
        var root = null;
        for(var i = 0; i < doc.children.length; ++i) {
            if(doc.children[i].localName == "spriteset") {
                root = doc.children[i];
                break;
            }
        }
        if(!root)
            return;

        for(var i = 0; i < doc.children.length; ++i) {
            // TODO: Animation setup here
        }

        if(this.animations.length == 0)
            return;

        for(var i = 0; i < this.animations.length; ++i) {
            // TODO: Arrange animations
        }
        // TODO: Generate the texture here
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

    draw()
    {
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
