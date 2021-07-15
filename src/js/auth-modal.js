import * as basicLightbox from "basiclightbox";
import 'basiclightbox/dist/basicLightbox.min.css';


export const modalAuth = basicLightbox.create(`
<form class="form-container">
<h1 class="title-auth">Register</h1>
<label for="email" class="label-auth">Email</label>
<input type="text" placeholder="Enter Email" name="email" class="input-auth" id="email" required>

<label for="psw" class="label-auth">Password</label>
<input type="password" placeholder="Enter Password" name="psw" class="input-auth" id="password" required>

 <label for="psw-repeat" class="label-auth">Repeat Password</label>
 <input type="password" placeholder="Repeat Password" name="psw-repeat" class="input-auth" id="password-repeat" required>
  <button type="submit" class="sign-btn">JOIN</button>
</form>
`);
