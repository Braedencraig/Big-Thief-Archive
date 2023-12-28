export const memberLinkoutQuery = `query {
    memberLinkoutCollection {
        items {
            memberName
            externalLink
        }
    }
}`;

export const photosQuery = `query {
    photoCollection {
      items {
        altText
        year {
          year
        }
        image {
          url
        }
        photoCredits
      }
    }
}`;

export const songsQuery = `query {
    songCollection {
      items {
        lyrics
        linkToVideo
        linkToListen
        title
        year {
          year
        }
      }
    }
}`;

export const yearsQuery = `query {
    yearCollection {
      items {
        year
      }
    }
}`;

export const releasesQuery = `query {
  releaseCollection {
    items {
      title
      year {
        year
      }
      tracklistCollection {
        items {
          title
          lyrics
        }
      }
    }
  }
}`;

export const videosQuery = `query {
  videoCollection {
    items {
      title
      isLive
      isOfficial
      isSessions
      embedUrl
      year{
        year
      }
    }
  }
}`;

export const showsQuery = `query {
  showCollection {
    items {
      setlists {
        json
      }
      city
      venue
      date
      title
      year {
        year
      }
    }
  }
}`;

export const releaseByYearQuery = `query {   
  releasedMusicCollection {
    items {
      year {
        year
      }
      videosCollection {
        items {
          embedUrl
        }
      }
    }
  }
}`;

export const unreleasedMusicByYearQuery = `query {   
  unreleasedMusicCollection {
    items {
      year {
        year
      }
      songsCollection {
        items {
          title
          lyrics
          linkToVideo
          linkToListen
        }
      }
    }
  }
}`;

export const demosByYearQuery = `query {   
  demosCollection {
    items {
      year {
        year
      }
      songsCollection {
        items {
          title
          lyrics
          linkToVideo
          linkToListen
        }
      }
    }
  }
}`;
