class Image {
  constructor(url) {
    this.url = url;
  }
}

class PngImage extends Image {
  constructor(url) {
    super(url);
    this.isTransporent = true;
  }
}

class GifImage extends Image {
  constructor(url, numOfColours) {
    super(url);
    this.numberOfColours = numOfColours;
  }
}

class JpegImage extends Image {
  constructor(url, quality) {
    super();
    this.quality = quality;
  }
}


function createImage(url, ...options) {
  if (url.match(/.jpeg$/)) {
    return new JpegImage(url, ...options);
  } else if (url.match(/.gif$/)) {
    return new GifImage(url, ...options);
  } else if (url.match(/.png$/)) {
    return new PngImage(url, ...options);
  } else {
    throw new Error('Unsupported format');
  }
}


// another example Profiler

class Profiler {
  constructor(label) {
    this.label = label;
    this.lastTime = null;
  }

  start() {
    this.lastTime = process.hrtime();
  }

  end() {
    const diff = process.hrtime(this.lastTime);
    console.log(`Timer "${this.label}" took ${diff[0]} seconds and ${diff[1]} nanoseconds`);
  }
}

// mode is like process.env.NODE_ENV
function getProfiler(label, mode) {
  if (mode === 'development') {
    return new Profiler(label);
  } else if (mode === 'production') {
    return {
      start() {},
      end() {}
    }
  }
}


module.exports = {
  getProfiler,
  createImage
};
