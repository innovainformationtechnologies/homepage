const p5 = await import("https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.min.js").then(module => module.default);

export function p5_init(sketch, parent_id) {
    const element = document.getElementById(data.id);
    return new p5(sketch, parent_id);
}