let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

// it'll log "neigh", "tweet tweet", and "*cricket*" to the console
// because there are no break keywords after each case as after the 
// program finds a match, it prints everything else after the match too.