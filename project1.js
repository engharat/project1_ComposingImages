// bgImg is the background image to be modified.
// fgImg is the foreground image.
// fgOpac is the opacity of the foreground image. 
// fgPos is the position of the foreground image in pixels. It can be negative and (0,0) means the top-left pixels of the foreground and background are aligned.
function composite( bgImg, fgImg, fgOpac, fgPos)
{	
	//iterate over all the pixels of the foreground image
	for(let y = 0; y < fgImg.height; y++) {
		for(let x = 0; x < fgImg.width; x++) {
			//compute the index of the pixels in the foreground 
			let index_fg = (y * fgImg.width + x)* 4; 
			//compute the coordinates of the background image wrt the foreground image 
			let x_bg = x + fgPos.x;
			let y_bg = y + fgPos.y;
			//check if these coordinates are inside the limits of the bg image
			if(x_bg >= 0 && x_bg < bgImg.width && y_bg >= 0 && y_bg < bgImg.height) {
				//compute the index of the pixels of the background. We will use them to compute the alpha-blending
				let index_bg = (y_bg * bgImg.width + x_bg) * 4;
				
				//normalize the alpha value of the foreground to preserve the transparent areas after blending 
				let a_fg = fgImg.data[index_fg + 3] / 255;
				let fgOpac_n = fgOpac * a_fg;
				
				//compute the alpha blending for RGB color channel
				for(let channel = 0; channel < 3; channel++) {
					bgImg.data[index_bg + channel] = fgImg.data[index_fg + channel] * fgOpac_n + (1 - fgOpac_n)* bgImg.data[index_bg + channel];
				}
			}
		}
	}
}
