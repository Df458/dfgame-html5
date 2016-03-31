var c;
var t;
var test_tex;
var ax;

function draw_test()
{
    update_input();
    ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT);

    t.rotate(0.1, true);

    var b = Math.abs((t.angle / 3) % (Math.PI) - Math.PI / 2);
    var d = Math.abs((t.angle / 4) % (Math.PI) - Math.PI / 2);
    var e = Math.abs((t.angle / 7) % (Math.PI) - Math.PI / 2);
    t.translate([ax.analog[0] * 4, ax.analog[1] * 4], true);
    // t.scale([(b * 3) + 1, (b * 3) + 1], false);
    // t.translate([Math.cos(t.angle / 5) * 450 + 500, Math.sin(t.angle / 3) * 200 + 350]);
    render_quad(c, t.mat, [b, d, e, 1], test_tex, true);
}

function start()
{
    resource_path = "data"
    init_renderer();
    init_audio();
    init_input();

    c = new Matrix();
    c.ortho(0, 1024, 768, 0, 0, 1);

    t = new Transform2D();
    t.translate([400, 300]);

    test_tex = new Texture("textures", "test.png");
    var a = new AudioPlayer("audio", "test.ogg");
    // a.onready = function() { a.play(); }
    main_loop_begin(draw_test);

    // var i = new ActionInput();
    // i.onactive = function() { t.rotate(0, false); };
    // i.bindKey(39);
    // var j = new ActionInput();
    // j.onactive = function() { t.rotate(700, false); };
    // j.bindKey(37);

    ax = new AxisInput();
    ax.bindKey(39, true, true);
    ax.bindKey(37, true, false);
    ax.bindKey(40, false, true);
    ax.bindKey(38, false, false);

    // load_resource_to_buffer(null, "test.txt", function() { alert(this.responseText); });
} 