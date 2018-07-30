# AI-Rotate-Artboard

The purpose of this script is to rotate your artboard and its contents. It supports rotating in 90 degree increments, either clockwise (L) or counter-clockwise (R). It supports multiple layers, but is not designed for use with multiple artboards. 

Note: The current release is extremely buggy. It works (sometimes!) for very simple graphics. However, there are two significant bugs: (1) It will sometimes scatter objects during the rotation of the artboard; this happens quite often with more complex artwork, and occasionally with artwork that seems simple. (2) It will sometimes rotate the artboard 180 degrees instead of 90.

Usage:

- Install the scripts in your Adobe Illustrator scripts folder. On the Mac, this is in the application folder, then Presets > (language) > Scripts. Restart Illustrator.
- Choose the scripts from the File menu > Scripts. "RotateArtboard-90L" rotates 90 degrees left (90° counter-clockwise). "RotateArtboard-90R" rotates 90 degrees right (90° clockwise).
