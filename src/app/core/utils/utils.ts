export class Utils {
    public static isNullOrEmpty = (object: string | any[]) => {
        if (object == null) return true;
        if (object == undefined) return true;
        if (object.length == 0) return true;
        return false;
    };
      
    public static isNullOrUndefined = (object: any) => {
        if (object == null) return true;
        if (object == undefined) return true;
        return false;
    };

    public static uuidv4() : string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
    }
}