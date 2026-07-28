// Shared decoration catalog — add new decorations here only.
// scale = how big the decoration image renders relative to the avatar circle.
// 1.44 (144%) matches the old fixed -22% inset — treat that as "default" size.
// Bump it up for decorations that need more room (e.g. wide hats, halos),
// or down for small/subtle ones (e.g. a tiny mustache).
window.DECORATIONS = [
  { id: 'avatar-1', name: 'Artist mustache', image: 'assets/deco/avatar-1.svg', price: 0, scale: 1.5 },
  { id: 'avatar-2', name: 'Ducky', image: 'assets/deco/avatar-2.svg', price: 99, scale: 1 }
];
