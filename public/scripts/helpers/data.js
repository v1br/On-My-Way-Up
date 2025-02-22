// World data
const game_width = window.innerWidth > 375 ? 375 : window.innerWidth;
const game_height = window.innerHeight > 600 ? 600 : window.innerHeight;

const world_gravity = 800;
const world_bounds_x = 0;
const world_bounds_y = -3000;
const world_bounds_width = 720;
const world_bounds_height = 3080;

// Player data
const player_start_x = 320;
const player_start_y = -100;
// const player_start_x = 400;
// const player_start_y = -2200;
const player_jump_velocity = -500;

// Terrain data
const large_tile_width = 48;
const large_tile_height = 48;

// Debug data
const area_opacity = 0.2;
