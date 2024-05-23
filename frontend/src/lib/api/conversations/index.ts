import AxiosManager, { Options } from "../AxiosManager";

class Conversations extends AxiosManager {
  constructor(options: Options) {
    super(options);
  }

  public readonly list = async () => {
    const { data: resData } = await this.instance.get<{
      data: {};
    }>("/conversations");
    return resData.data;
  };

  public readonly create = async () => {
    const { data: resData } = await this.instance.post<{
      data: {};
    }>("/conversations");
    return resData.data;
  };
}

export default Conversations;
