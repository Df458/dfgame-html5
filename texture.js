class Texture
{
    constructor(path, name)
    {
        this.ready = false;
        this.tex = null;
        this.img = new Image();
        this.width = 0;
        this.height = 0;

        this.img.owner = this;
        this.onready = function() { };

        this.img.onload = function() { this.owner.prepare(); };
        this.img.src = construct_extended_resource_path(path, name);
    }

    prepare() {
        this.tex = ctx.createTexture();
        this.width = this.img.width;
        this.height = this.img.height;
        ctx.bindTexture(ctx.TEXTURE_2D, this.tex);
        ctx.texImage2D(ctx.TEXTURE_2D, 0, ctx.RGBA, ctx.RGBA, ctx.UNSIGNED_BYTE, this.img);
        ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.NEAREST);
        ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.NEAREST);
        ctx.bindTexture(ctx.TEXTURE_2D, null);
        this.ready = true;
        
        if(typeof this.onready === "function")
            this.onready();
    }
}
