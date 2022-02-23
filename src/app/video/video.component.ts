import { Component, Input, OnInit } from '@angular/core';
import { VideoService } from "../services/video.service";
import Utils from "../utils/utils";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() personalInfo:any = {};
  searchTerm = '';
  videos: any = [];
  selectedVideo: any = {};
  videoSrc = '';
  utils = Utils;
  string = String;

  constructor(public  videoService: VideoService) { }

  ngOnInit(): void {
    const { status, birthYear, gender} = this.personalInfo;
    this.searchTerm = `${status} ${birthYear} ${gender}`;
    this.getVideosByTerm();
  }

  getVideosByTerm() {
    if (this.searchTerm) {
      this.videoService.getVideosByQuery(this.searchTerm).subscribe((result: any) => {
        this.videos = result;
        this.selectedVideo = this.videos[Math.floor(Math.random() * this.videos.length)];
        this.videoSrc = `https://www.youtube.com/embed/${this.selectedVideo.id.videoId}`;
      })
    }
  }

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    this.videoSrc = `https://www.youtube.com/embed/${this.selectedVideo.id.videoId}`;
  }

  getTitleStyles() {
    let styles = ''
    const currentYear = new Date().getFullYear();
    styles += this.personalInfo.gender == 'Female' ? 'female ' : 'male ';
    styles += (currentYear - this.personalInfo.birthYear) < 30 ? 'young ' : '';
    styles += (currentYear - this.personalInfo.birthYear) > 40 ? 'old ' : '';
    return styles;
  }



}
