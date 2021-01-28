import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
    let appController: AppController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService],
        }).compile();

        appController = app.get<AppController>(AppController);
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(appController.getHello()).toBe('Hello World!');
        });
    });

    describe('cats', () => {
        it('should return Three Cats', () => {
            expect(appController.getCats()).toHaveLength(3);
        });
    });

    describe('cats', () => {
        it('should expect one cat to be Garfield', () => {
            const shouldBeGarfield = appController.getCats().filter((cat) => cat === 'Garfield');
            expect(shouldBeGarfield).toHaveLength(1);
        });
    });
});
