function build_platforms(platforms) {
  build_platform_base(platforms, 22, 3, -4, 0);
  build_platform_long(platforms, 3, 6, -140);
  build_platform_long(platforms, 3, 6, -280);
}

// Function to build a long platform
function build_platform_long(platforms, length, x, y) {
  platforms.create(
    large_tile_width * x + large_tile_width / 2,
    y,
    "grass_left"
  );

  for (i = x + 1; i < x + length - 1; i++) {
    platforms.create(
      large_tile_width * i + large_tile_width / 2,
      y,
      "grass_top"
    );
  }

  platforms.create(
    large_tile_width * (x + length - 1) + large_tile_width / 2,
    y,
    "grass_right"
  );
}

// Function to build a long platform
function build_platform_base(platforms, length, depth, x, y) {
  for (i = x + 1; i < x + length - 1; i++) {
    platforms.create(
      large_tile_width * i + large_tile_width / 2,
      y,
      "grass_fill_top"
    );
  }

  for (j = 1; j <= depth; j++) {
    for (i = x + 1; i < x + length - 1; i++) {
      platforms.create(
        large_tile_width * i + large_tile_width / 2,
        y + j * large_tile_height,
        "grass_fill"
      );
    }
  }
}
