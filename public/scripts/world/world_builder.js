function build_platforms(platforms) {
	build_platform_floor(platforms, 28, 3, -6, 0);

	// section A
	build_simple_platform(platforms, 3, 1, 448, -140);
	build_simple_platform(platforms, 3, 1, 168, -280);
	build_simple_platform(platforms, 3, 1, 448, -420);
	build_simple_platform(platforms, 3, 1, 168, -560);

	build_simple_platform(platforms, 2, 2, 216, -840);
	build_simple_platform(platforms, 2, 1, 360, -980);
	build_simple_platform(platforms, 2, 2, 504, -840);
	build_simple_platform(platforms, 4, 1, 312, -1120);
	build_simple_platform(platforms, 2, 1, 216, -1260);
	build_simple_platform(platforms, 4, 1, 0, -1400);

	// section B
	build_simple_platform(platforms, 4, 3, 72, -1780);
	build_simple_platform(platforms, 1, 1, 360, -1780);
	build_simple_platform(platforms, 1, 1, 456, -1500);
	build_simple_platform(platforms, 1, 1, 552, -1780);
	build_simple_platform(platforms, 1, 1, 648, -1500);
	build_simple_platform(platforms, 1, 1, 696, -1972);
	build_simple_platform(platforms, 3, 3, 408, -2020);
	build_simple_platform(platforms, 1, 1, 696, -2220);

	build_simple_platform(platforms, 5, 2, 24, -1940);

	// section C
	build_simple_platform(platforms, 1, 1, 144, -2220);
	build_simple_platform(platforms, 1, 1, 192, -2268);
	build_simple_platform(platforms, 1, 1, 144, -2316);
	build_simple_platform(platforms, 1, 1, 528, -2504);
	build_simple_platform(platforms, 1, 1, 480, -2552);
	build_simple_platform(platforms, 1, 1, 528, -2600);
}

function build_movers(movers) {
	build_mover_horizontal(movers, 240, -2316, 240, 576);
}

function build_saws(saws) {
	build_saw_row(saws, 316, -2116, (length = 2), (gap = 20));
}

function build_spikes(spikes) {
	build_spike_row(spikes, 408, -1892, (length = 7), (flip = true));
	build_spike_row(spikes, 53, -1860, (length = 12), (flip = true));
	build_spike_row(spikes, 68, -1972, (length = 7), (flip = false));
}

function build_fans(fans) {
	build_fan_area(fans, 24, -1428);
	build_fan_area(fans, 648, -1528);
}

function build_trampolines(trampolines) {
	build_trampoline_area(trampolines, 170, -598);
	build_trampoline_area(trampolines, 530, -878);
	build_trampoline_area(trampolines, 458, -1538);
	build_trampoline_area(trampolines, 24, -1978);
	build_trampoline_area(trampolines, 698, -2258);
}

function build_rocks(rocks) {
	const rock = rocks
		.create(200, -100, 'rock_idle')
		.setSize(30, 24)
		.setOffset(6, 6)
		.anims.play('rock_blink');

	rock.dryeyes = 0;
}

// Function to place static mover
function build_mover_static(movers, x, y) {
	const mover = movers.create(x, y, 'mover_on').anims.play('mover_on');

	mover.type = 'static';
}

// Function to place horizontal mover
function build_mover_horizontal(movers, x, y, start, end) {
	const mover = movers.create(x, y, 'mover_on').anims.play('mover_on');

	mover.type = 'horizontal';
	mover.start = start === undefined ? x : start;
	mover.end = end === undefined ? x : end;
	mover.dir = 1;
}

// Function to place vertical mover
function build_mover_vertical(movers, x, y, start, end) {
	const mover = movers.create(x, y, 'mover_on').anims.play('mover_on');

	mover.type = 'vertical';
	mover.start = start === undefined ? y : start;
	mover.end = end === undefined ? x : end;
	mover.dir = 1;
}

// Function to place a saw row
function build_saw_row(saws, x, y, length = 1, gap = 0) {
	for (let i = 0; i < length; i++) {
		saws.create(x + i * 38 - (i ? 0 : gap), y, 'saw_on').anims.play('saw_on');
	}
}

// Function to place a spike row
function build_spike_row(spikes, x, y, length = 1, flip = false) {
	if (flip) {
		for (let i = 0; i < length; i++) {
			spikes
				.create(x + i * 16, y, 'spike')
				.setFlip(false, true)
				.setSize(16, 4)
				.setOffset(0, -3);
		}
	} else {
		for (let i = 0; i < length; i++) {
			spikes
				.create(x + i * 16, y, 'spike')
				.setSize(16, 4)
				.setOffset(0, 12);
		}
	}
}

// Function to build a trampoline
function build_trampoline_area(trampolines, x, y) {
	trampolines.create(x, y, 'trampoline_idle').setSize(12, 4).setOffset(8, 16);
}

// Function to build a fan
function build_fan_area(fans, x, y) {
	const fan = fans.create(x, y, 'fan_on');
	fan.anims.play('fan_on');
}

// Function to build a platform
function build_simple_platform(platforms, length, depth, x, y) {
	if (depth < 1) {
		return;
	}

	// Block platform
	else if (depth === 1 && length === 1) {
		platforms.create(x, y, 'grass').setFrame(3);
	}

	// Horizontal platform
	else if (depth === 1) {
		platforms.create(x, y, 'grass').setFrame(0);
		for (let i = 1; i < length - 1; i++) {
			platforms.create(x + i * large_tile_width, y, 'grass').setFrame(1);
		}
		platforms.create(x + (length - 1) * large_tile_width, y, 'grass').setFrame(2);
	}

	// Thick platform
	else {
		platforms.create(x, y, 'grass').setFrame(4);
		for (let i = 1; i < length - 1; i++) {
			platforms.create(x + i * large_tile_width, y, 'grass').setFrame(5);
		}
		platforms.create(x + (length - 1) * large_tile_width, y, 'grass').setFrame(6);

		for (j = 1; j < depth - 1; j++) {
			platforms.create(x, y + j * large_tile_height, 'grass').setFrame(8);
			for (let i = 1; i < length - 1; i++) {
				platforms
					.create(x + i * large_tile_width, y + j * large_tile_height, 'grass')
					.setFrame(9);
			}
			platforms
				.create(x + (length - 1) * large_tile_width, y + j * large_tile_height, 'grass')
				.setFrame(10);
		}

		platforms.create(x, y + (depth - 1) * large_tile_height, 'grass').setFrame(12);
		for (let i = 1; i < length - 1; i++) {
			platforms
				.create(x + i * large_tile_width, y + (depth - 1) * large_tile_height, 'grass')
				.setFrame(13);
		}
		platforms
			.create(
				x + (length - 1) * large_tile_width,
				y + (depth - 1) * large_tile_height,
				'grass'
			)
			.setFrame(14);
	}
}

// Function to build a thick platform as a base
function build_platform_floor(platforms, length, depth, x, y) {
	for (i = x + 1; i < x + length - 1; i++) {
		platforms.create(large_tile_width * i + large_tile_width / 2, y, 'grass').setFrame(5);
	}

	for (j = 1; j <= depth; j++) {
		for (i = x + 1; i < x + length - 1; i++) {
			platforms
				.create(
					large_tile_width * i + large_tile_width / 2,
					y + j * large_tile_height,
					'grass'
				)
				.setFrame(9);
		}
	}
}
