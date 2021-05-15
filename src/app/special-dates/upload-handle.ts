import { Subject } from 'rxjs/Subject';
import { Storage } from '@aws-amplify/storage';

export class UploadHandle {
    showProgress: boolean
    uploaded: boolean
    uploadAnother: boolean

    upload_file_path: Subject<string>
    s3_file_path: string | object;
    file_path: string;

    constructor(){
        this.showProgress =  false
        this.uploaded =  false
        this.uploadAnother =  false
        this.upload_file_path =  new Subject<string>();
        this.s3_file_path = "";
        this.file_path = "";
        this.upload_file_path.asObservable().subscribe(async data => {
            this.file_path = data;
            try {
                this.s3_file_path = await Storage.get(data, { level: 'public' });
            } catch (error) {
                this.s3_file_path = ""
            }
        })
    }

    reset(){
        this.showProgress = false
        this.uploaded = false
        this.uploadAnother = false
        this.upload_file_path.next("");
    }

    update(obj: any){
        if (obj["showProgress"]){
            this.showProgress = obj["showProgress"]
        }
        if (obj["uploaded"]){
            this.uploaded = obj["uploaded"]
        }
        if (obj["uploadAnother"]){
            this.uploadAnother = obj["uploadAnother"]
        }
        if (obj["upload_file_path"]){
            this.upload_file_path.next(obj["upload_file_path"])
        }
    }
}
