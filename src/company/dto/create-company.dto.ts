import {CreateAddressDto} from "../../address/dto/create-address.dto";

export class CreateCompanyDto {
    name: string
    adress: Array<CreateAddressDto>
}
