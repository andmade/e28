## P3 Peer Review

- Reviewer's name: Ashley Davis
- Reviwee's name: Jose Conchello
- URL to reviewee's Github repo: _<https://github.com/conc2304/e28>_

### Are you able to produce any errors or unexpected results?

In compiling the code on my system, I had an error with imports of the [`easingService.js`](https://github.com/conc2304/e28/blob/master/p3/src/js/services/easingService.js) and [`renderPolygon.js`](https://github.com/conc2304/e28/blob/master/p3/src/js/services/renderPolygon.js) files. The files begin with lowercase letters, but are referenced using capital letters in the import commands. My guess is that the dev is using a case-insensitive filesystem, so didn't have any issues, while I am not. However, it may just be a quirk with my system (which is Ubuntu on the Windows Subsystem for Linux). In any case, I renamed those files to begin with caps and all was fine, so I'd suggest altering the naming of those files to be consistent with the PascalCase of the others in the folder to forestall any problems.

In the app, when clearing a set keyboard key with the `x` button, the console shows an error stemming from [`ParameterAuxInput.vue`](https://github.com/conc2304/e28/blob/master/p3/src/components/ParameterAuxInput.vue) that `setKey` is not defined. This can be fixed by using `this` to reference the function in the `clear` method in that file (starts at line 77).

```javascript
 clear() {
      this.setKey();
    }
```

Also, when setting a key, if the field is blank when pressing enter, the console shows `"TypeError: keyboardKey is null"` (and others stemming from this one). In the `setKey()` function, I would add a check to make sure the input field is not null before proceeding further. Something like:

```javascript
    setKey() {
      if (this.keyboardKey) {
        KeyboardControlsService.setKeyboardControl(
          this.keyboardKey,
          this.parameterValue,
          this.parameter.attrName,
          this.sketchIndexSelected,
        );
      }
    },
```

There's also some empty css in this file, along with an empty function that may be outdated (`setValue(event) {}`, which seems to have been subsumed by the `setKey` function).

The popup on the home page also has a couple of spelling errors:

> Line 76: _"VYZBY is an interactive audio visualizer that let's you interact with **in** in many ways."_,

> Line 82: _'Add music to your **sessiong** by playing songs from SoundCloud or off your computer.',_

### Were there any parts of the interface that you found confusing or unclear?

In terms of interface improvements, I might flash a little message under the input field when a keyboard key is set/changed or have some small text showing what the current value is. Right now, the change takes effect when one presses enter, but there's no indication that it has done so save a user trying it out (or even that an enter press is required; I initially assumed it was not). You might even set it up so that every time the value is changed, the relevant wave is briefly activated to show the new value.

A legend popup of what values represent for some fields would be useful, such as for colors. 0-30 for reddish, 30-60 for orange, etc. Though if your audience for the app should be familiar with the 360 color wheel, this may not be necessary.

For the extra controls that show when pressing a dropdown, I would indent them or add a slightly different background color to them. Right now, they are styled to look the same as and appear at the same indentation level as the parent menus, so it is not always evident that they are sub menus especially when one scrolls down enough that the grey parent header is not showing.

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?

The majority of the javascript files have all been well-documented with their intended functions. Some additional commentary in some files (such as [SketchBaseHomePage.js](https://github.com/conc2304/e28/blob/master/p3/src/js/sketches/SketchBaseHomePage.js)) could be helpful, such as documenting that the `ParticleScript` function is used in conjunction with the `p5` library to construct the animation on the home page.

To piggyback off that, in [HomePage.vue](https://github.com/conc2304/e28/blob/master/p3/src/views/HomePage.vue) and [VisualizerPage.vue](https://github.com/conc2304/e28/blob/master/p3/src/views/VisualizerPage.vue) (or perhaps just even in the README), some comments on what's going on with the `P5` library would be helpful. For instance this line:

`new P5(ParticleScript, 'splash-sketch-background');`

It does rely on the functionality of an external library and for maximum understanding, one should go peek at that library's documentation. That said, even a small line here that links to the relevant section in the external library documentation would be helpful.

### Are there any parts of the code that you found interesting or taught you something new?

I've never used an HTML pre-processor before, so seeing Pug was new. It was somewhat confusing at first, but I can see where it really condenses the code, makes the structure more apparent, and helps highlight the parts of HTML that are relevant (the tags, classes, and attributes). It may be something I try in p4, if I have the time.

I've also never used Vuetify. It was interesting to see a front-end framework implemented essentially as components versus others that depend on classes.

### Are there any best practices discussed in course material that you feel were not addressed in the code?

No. A great job was done separating setup code/functionality and in organizing similar files.

Though, I might look into pulling some of your styling/CSS out of the templates. Very often for the Vuetify components, styling is behind given directly in the component such as in

```javascript
          .tooltip-wrapper( v-on="on")
            KnobControl(
              v-on="on"
              v-if="parameter.audio && gain"
              :min="0"
              :max="100"
              :size="40"
              primary-color="#0eb1ff"
              secondary-color="#0e83cd"
              text-color="#FFFFFF"
              v-model="gain"
            )
```

If it's not possible with the Vuetify library to do this styling via classes, then instead of hardcoding in your color values here, I'd define them in the initialization of Vuetify as shown [on their documentation](https://vuetifyjs.com/en/customization/theme).

### Do you have any additional comments not covered in the above questions?

Overall, I find the application to be very impressive and a clear result of a lot of hard work and planning! Only some minor issues from the sheer scope of the project and deadlines no doubt, and it's a great showcase of the dynamic benefits of SPA. It was very cool editing the waves and I look forward to seeing the audio player incorporated.
