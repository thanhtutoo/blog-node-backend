import {
    Model,
    Table,
    Column,
    Comment,
    DataType,
    AllowNull,
    Default,
    ForeignKey,
    BelongsTo,
    BelongsToMany,
} from 'sequelize-typescript';
import { User } from './User.model';
import { PostImage } from './PostImage.model';
import { Post } from './Post.model';

@Table({
    modelName: 'Image',
    tableName: 'Images',
    comment: '첨부파일',
    timestamps: true,
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
})
export class Image extends Model<Image> {
    @Comment('접근 경로')
    @AllowNull(false)
    @Column(DataType.STRING(500))
    public src!: string;

    @Comment('서버 경로')
    @AllowNull(false)
    @Column(DataType.STRING(500))
    public path!: string;

    @Comment('파일 이름')
    @AllowNull(false)
    @Column(DataType.STRING(300))
    public fileName!: string;

    @Comment('확장자')
    @AllowNull(true)
    @Column(DataType.STRING(20))
    public fileExtension!: string;

    @Comment('크기')
    @AllowNull(false)
    @Default(0)
    @Column(DataType.BIGINT)
    public size!: number;

    // https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
    @Comment('컨테트 형식')
    @AllowNull(false)
    @Default('application/octet-stream')
    @Column(DataType.STRING(100))
    public contentType!: string;

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    public userId!: number;

    @BelongsTo(() => User)
    public user!: User;

    @BelongsToMany(() => Post, () => PostImage)
    public posts!: Post[];
}
