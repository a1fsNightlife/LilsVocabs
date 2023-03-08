import { Component } from '@angular/core';
import { vocabulary } from 'src/app/model/vocabulary';

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.scss']
})
export class ExaminationComponent {

  isChecked: boolean = false;
  
  vocabs: vocabulary[] = [];
  arrPos: number = 0;

  currentVocab: vocabulary = {ger: '', med:'', mode: false};
  randomVocab: string = 'Vocab here!';
  solution: string = '';
  randomArr: number = 0;
  randomLang: number = 0;

  pick: string = '';
  buttonTxt: string = 'EINLOGGEN';
  correct: boolean = false;
  btnClicked: boolean = false;

  isRevealed: boolean = false;
  revealBtnTxt: string = 'Reveal';

  previousVocabs: vocabulary[] = [];
  nextVocabs: vocabulary[] = [];

  constructor() { }

  ngOnInit() { 
    this.vocabs = [
      { med: 'adam`s apple', ger: 'der Adamsapfel', mode: false },
      { med: 'ankle', ger: 'der Fußknöchel', mode: false },
      { med: 'ankle joint', ger: 'das Sprunggelenk', mode: false },
      { med: 'armpit', ger: 'die Achselhöhle', mode: false },
      { med: 'auditory ossicles', ger: 'das Gehörknöchelchen', mode: false },
      { med: 'back', ger: 'der Rücken', mode: false },
      { med: 'back of the neck', ger: 'der Nacken', mode: false },
      { med: 'base of the scull', ger: 'Schädelbasis', mode: false },
      { med: 'umbilicus', ger: 'der Bauchnabel', mode: false },
      { med: 'belly button', ger: 'der Bauchnabel', mode: false },
      { med: 'belly', ger: 'der Bauch', mode: false },
      { med: 'abdomen', ger: 'das Abdomen', mode: false },
      { med: 'big toe', ger: 'Die Großzehe', mode: false },
      { med: 'bile', ger: 'die Galle', mode: false },
      { med: 'biliary system', ger: 'das Gallengangsystem', mode: false },
      { med: 'bladder', ger: 'die Blase', mode: false },
      { med: 'brainstem', ger: 'der Hirnstamm', mode: false },
      { med: 'breast', ger: 'die Brust', mode: false },
      { med: 'bunion', ger: 'das Hühnerauge', mode: false },
      { med: 'buttock', ger: 'die Gesäßbacke', mode: false },
      { med: 'calf bone', ger: 'das Wadenbein', mode: false },
      { med: 'calf', ger: 'die Wade', mode: false },
      { med: 'cardiac chambers', ger: 'die Herzkammern', mode: false },
      { med: 'cardiac conduction system', ger: 'das Reizleistungssystem des Herzens', mode: false },
      { med: 'carotid artery', ger: 'die Halsschlagader', mode: false },
      { med: 'central nervous system', ger: 'das Zentral-nervensystem', mode: false },
      { med: 'cheekbone', ger: 'der Wangenknochen', mode: false },
      { med: 'chin', ger: 'das Kinn', mode: false },
      { med: 'costal arch', ger: 'der Rippenbogen', mode: false },
      { med: 'creases of the hand', ger: 'die Handlinien', mode: false },
      { med: 'dermatoms of the back', ger: 'die Rückendermatome', mode: false },
      { med: 'disc', ger: 'die Sehnervenscheibe', mode: false },
      { med: 'dorsum of the foot', ger: 'der Fußrücken', mode: false },
      { med: 'eardrum', ger: 'das Trommelfell', mode: false },
      { med: 'earlobe', ger: 'das Ohrläppchen', mode: false },
      { med: 'elbow', ger: 'der Ellenbogen', mode: false },
      { med: 'external os of the uterus', ger: 'der äußere Gebärmuttermund', mode: false },
      { med: 'eyeball', ger: 'der Augapfel', mode: false },
      { med: 'eyebrow', ger: 'die Augenbraue', mode: false },
      { med: 'eyeground', ger: 'der Augenhintergrund', mode: false },
      { med: 'eyelashes', ger: 'die Wimpern', mode: false },
      { med: 'eyelid', ger: 'das Augenlid', mode: false },
      { med: 'femur', ger: 'das Femur', mode: false },
      { med: 'finger', ger: 'der Finger', mode: false },
      { med: 'fingernails', ger: 'die Fingernägel', mode: false },
      { med: 'flank', ger: 'die Flanke', mode: false },
      { med: 'forearm', ger: 'der Unterarm', mode: false },
      { med: 'forehead', ger: 'die Strin', mode: false },
      { med: 'frontal lobe', ger: 'der Frontallappen', mode: false },
      { med: 'gallbladder', ger: 'die Gallenblase', mode: false },
      { med: 'groin', ger: 'die Leiste', mode: false },
      { med: 'gut', ger: 'der Darm', mode: false },
      { med: 'hairline', ger: 'der Haaransatz', mode: false },
      { med: 'hard palate', ger: 'der harte Gaumen', mode: false },
      { med: 'soft palate', ger: 'der weiche Gaumen', mode: false },
      { med: 'heart', ger: 'das Herz', mode: false },
      { med: 'heel', ger: 'die Ferse', mode: false },
      { med: 'hip', ger: 'die Hüfte', mode: false },
      { med: 'hip joint', ger: 'das Hüftgelenk', mode: false },
      { med: 'hipbone', ger: 'die Hüftknochen', mode: false },
      { med: 'hyoid bone', ger: 'das Zungenbein', mode: false },
      { med: 'intervertebral disc', ger: 'die Bandscheibe', mode: false },
      { med: 'kidney stones', ger: 'die Nierensteine', mode: false },
      { med: 'kidney', ger: 'die Niere', mode: false },
      { med: 'knee cap', ger: 'die Kniescheibe', mode: false },
      { med: 'knuckles of the hand', ger: 'die Knöchel der Hand', mode: false },
      { med: 'large bowel', ger: 'der Dickdarm', mode: false },
      { med: 'leg', ger: 'das Bein', mode: false },
      { med: 'liver', ger: 'die Leber', mode: false },
      { med: 'lobes of the lung', ger: 'der Lungenlappen', mode: false },
      { med: 'lower leg', ger: 'der Unterschenkel', mode: false },
      { med: 'lumbar curve of the v.c.', ger: 'die Lenden-lordose der Wirbelsäule', mode: false },
      { med: 'mammary gland', ger: 'die Brustdrüse', mode: false },
      { med: 'middle ear', ger: 'das Mittelohr', mode: false },
      { med: 'muscles of mastication', ger: 'die Kaumuskeln', mode: false },
      { med: 'nipple', ger: 'die Brustwarze', mode: false },
      { med: 'nose', ger: 'die Nase', mode: false },
      { med: 'nostrils', ger: 'die Nasenlöcher', mode: false },
      { med: 'overy', ger: 'der Eierstock', mode: false },
      { med: 'uterine tubes', ger: 'der Eileiter', mode: false },
      { med: 'palatine tonsil', ger: 'die Gaumenmandel', mode: false },
      { med: 'pelvic diaphragm', ger: 'das Nierenbecken', mode: false },
      { med: 'pelvic girdle', ger: 'der Beckengürtel', mode: false },
      { med: 'pericardial sac', ger: 'der Herzbeutel', mode: false },
      { med: 'prostate gland', ger: 'die Vorsteherdrüse', mode: false },
      { med: 'renal pelvis', ger: 'das Nierenbecken', mode: false },
      { med: 'reproductive oragans', ger: 'die Geschlechtsorgane', mode: false },
      { med: 'rib', ger: 'die Rippe', mode: false },
      { med: 'sacroiliac joints', ger: 'die Sakroilialgelenke', mode: false },
      { med: 'scalp', ger: 'die Kopfhaut', mode: false },
      { med: 'sciatica', ger: 'die vertebragenen tiefen Rückenschmerzen', mode: false },
      { med: 'semicircular canals', ger: 'die Bogengänge des Innenohrs', mode: false },
      { med: 'shin', ger: 'das Schienbein', mode: false },
      { med: 'shinbone', ger: 'das Schienbein', mode: false },
      { med: 'shoulder joint', ger: 'das Schultergelenk', mode: false },
      { med: 'shoulders', ger: 'die Schultern', mode: false },
      { med: 'small bowel', ger: 'der Dünndarm', mode: false },
      { med: 'sole of the foot', ger: 'die Fußsohle', mode: false },
      { med: 'spermatic cords', ger: 'die Samenleiter', mode: false },
      { med: 'spleen', ger: 'die Milz', mode: false },
      { med: 'stomach', ger: 'der Magen', mode: false },
      { med: 'teeth', ger: 'die Zähne', mode: false },
      { med: 'temple', ger: 'die Schläfe', mode: false },
      { med: 'testicles', ger: 'die Hoden', mode: false },
      { med: 'thigh', ger: 'der Oberschenkel', mode: false },
      { med: 'thoracic cage', ger: 'der knöcherne Thorax', mode: false },
      { med: 'thoracic curve of the v.c.', ger: 'die Brustkyphose der Wirbelsäule', mode: false },
      { med: 'thumb', ger: 'der Daumen', mode: false },
      { med: 'toes', ger: 'die Zehen', mode: false },
      { med: 'tongue', ger: 'die Zunge', mode: false },
      { med: 'tributaries of the neck weins', ger: 'die Zuflüsse der Halsvenen', mode: false },
      { med: 'upper arm', ger: 'der Oberarm', mode: false },
      { med: 'veins of the neck', ger: 'die Halsvenen', mode: false },
      { med: 'vertex', ger: 'der Scheitel', mode: false },
      { med: 'vitreous body', ger: 'der Glaskörper', mode: false },
      { med: 'vocal cords', ger: 'die Stimmbänder', mode: false },
      { med: 'vocal ligaments', ger: 'die Stimmritze', mode: false },
      { med: 'wrist', ger: 'das Handgelenk', mode: false },
    ];

    this.getRandomVocab();
  }

  checkExam() {

    if(!this.correct && this.buttonTxt == 'EINLOGGEN') {
      this.btnClicked = true;

      if(this.solution == this.pick) {
        this.buttonTxt = 'NÖÖÖXT'
        this.correct = true;
      }

    } else if(this.buttonTxt == 'NÖÖÖXT') {
      this.getRandomVocab();
      this.buttonTxt = 'EINLOGGEN'
      this.pick = '';
      this.btnClicked = false;
      this.correct = false;
    }
  }

  getRandomVocab() {
    this.randomArr = Math.floor(Math.random() * this.vocabs.length);
    this.randomLang = Math.floor(Math.random() * 2);

    this.currentVocab = this.vocabs[this.randomArr];
    
    if(this.randomLang === 0) {
      this.currentVocab.mode = false;

      this.randomVocab = this.currentVocab.med;
      this.solution = this.currentVocab.ger;
    } else {
      this.currentVocab.mode = true;

      this.randomVocab = this.currentVocab.ger;
      this.solution = this.currentVocab.med;
    }
  }

  getNextVocab() {
    this.previousVocabs.push(this.currentVocab);

    if(this.nextVocabs.length > 0) {
      let nextVocab = this.nextVocabs.shift();
      if(nextVocab != null) {
        this.resetVocab(nextVocab);
      }
    } else {
      this.getRandomVocab();
    }
  }

  getPreviousVocab() {
    let previousVocab = this.previousVocabs.pop();
    
    if(previousVocab != null) {
      this.nextVocabs.unshift(this.currentVocab);
      this.resetVocab(previousVocab);
    }
  }

  resetVocab(temp: vocabulary) {
    if(temp?.ger != null && temp?.ger != '') {
      this.currentVocab = temp;

      if(!this.currentVocab.mode) {
        this.randomVocab = temp.med;
        this.solution = temp.ger;
      } else {
        this.randomVocab = temp.ger;
        this.solution = temp.med;
      }
    }
  }

  revealCard() {
    this.isRevealed = !this.isRevealed;
    if(this.isRevealed) {
      this.revealBtnTxt = 'Hide';
    } else {
      this.revealBtnTxt = 'Reveal';
    }
  }
}
