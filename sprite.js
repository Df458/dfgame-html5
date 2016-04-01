class Animation
{
    constructor()
    {
        this.orients    = 0;
        this.dimensions = [0, 0];
        this.origin     = [0, 0];
        this.length     = 1;
        this.delay      = 1;
        this.autoplay   = false;
        this.autoloop   = false;
        this.speed_mod  = 1;

        this.atlas_box = [0, 0, 0, 0];
        this.handle = "idle";
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

        for(var i = 0; i < root.children.length; ++i) {
            if(root.children[i].name == "animation") {
                var index = this.animations.length;
                this.animations.push(new Animation);

                if(root.children[i].hasAttribute("name")) {
                    this.animations[index].name = root.children[i].getAttribute("name");
                }
                if(root.children[i].hasAttribute("length")) {
                    this.animations[index].length = root.children[i].getAttribute("length");
                }
                if(root.children[i].hasAttribute("speed")) {
                    this.animations[index].delay = root.children[i].getAttribute("speed");
                }
                if(root.children[i].hasAttribute("orients")) {
                    this.animations[index].orients = root.children[i].getAttribute("orients");
                }
                if(root.children[i].hasAttribute("loop")) {
                    this.animations[index].autoloop = root.children[i].getAttribute("loop") == "true";
                }
                if(root.children[i].hasAttribute("play")) {
                    this.animations[index].autoplay = root.children[i].getAttribute("play") == "true";
                }
                if(root.children[i].hasAttribute("origin_x")) {
                    this.animations[index].origin[0] = root.children[i].getAttribute("origin_x");
                }
                if(root.children[i].hasAttribute("origin_y")) {
                    this.animations[index].origin[1] = root.children[i].getAttribute("origin_y");
                }
                if(root.children[i].hasAttribute("file")) {
                    // TODO: Figure out file loading
                }
            }
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
