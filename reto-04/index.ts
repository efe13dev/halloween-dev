function findTheKiller(whisper: string, suspects: string[]): string {
  const whisperLower = whisper.toLowerCase();
  const DOLLAR_SIGN_LENGTH = 1;
  const isComplete = whisperLower.endsWith('$');
  const effectiveLength = isComplete
    ? whisperLower.length - DOLLAR_SIGN_LENGTH
    : whisperLower.length;

  return suspects
    .filter((suspect) => {
      const suspectLower = suspect.toLowerCase();

      if (isComplete && effectiveLength !== suspectLower.length) return false;
      if (!isComplete && effectiveLength > suspectLower.length) return false;

      const START_INDEX = 0;
      const whisperSlice = whisperLower.slice(START_INDEX, effectiveLength);

      for (const [i, currentChar] of [...whisperSlice].entries()) {
        if (currentChar !== '~' && currentChar !== suspectLower[i]) {
          return false;
        }
      }

      return true;
    })
    .join(',');
}

const whisper = 'd~~~~~a';
const suspects = [
  'Dracula',
  'Freddy Krueger',
  'Jason Voorhees',
  'Michael Myers'
];

console.log(findTheKiller(whisper, suspects));
