import {Module} from '@nestjs/common';
import {UserService} from './user.service';
import {UserController} from './user.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {UserModel} from "./model/user.model";
import {UserRoleModel} from "../role/models/userRole.model";
import {RoleModule} from "../role/role.module";

@Module({
    imports: [
        SequelizeModule.forFeature([UserModel, UserRoleModel]),
        RoleModule
    ],
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService]
})
export class UserModule {
}
