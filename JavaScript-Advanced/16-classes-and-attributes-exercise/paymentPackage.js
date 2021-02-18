const {assert, expect} = require('chai');

class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value    
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

describe('PaymentPackage Unit Tests', () => {
    it('constructor', () => {
        let instance = new PaymentPackage('Name', 100);

        assert.equal(instance._name, 'Name');
        assert.equal(instance._value, 100);
        assert.equal(instance._VAT, 20);
        assert.equal(instance._active, true);
    });

    it('name', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.equal(instance.name, 'Name');

        instance.name = 'Pesho';
        assert.equal(instance.name, 'Pesho');

        assert.throw(() => {instance.name = ''}, 'Name must be a non-empty string');
        assert.throw(() => {instance.name = 2}, 'Name must be a non-empty string');
    });

    it('VAT', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.equal(instance.VAT, 20);

        instance.VAT = 40;
        assert.equal(instance.VAT, 40);

        assert.throw(() => {instance.VAT = 'a'}, 'VAT must be a non-negative number');
        assert.throw(() => {instance.VAT = -2}, 'VAT must be a non-negative number');
    });

    it('active', () => {
        let instance = new PaymentPackage ('Name', 100);
        expect(instance.active).to.be.true;

        instance.active = false;
        expect(instance.active).to.be.false;

        expect(() => instance.active = 0).to.throw('Active status must be a boolean');
    });

    it('value', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.equal(instance.value, 100);

        instance.value = 3;
        assert.equal(instance.value, 3);

        instance.value = 0;
        assert.equal(instance.value, 0);

        assert.throw(() => {instance.value = -1}, 'Value must be a non-negative number');
        assert.throw(() => {instance.value = 'a'}, 'Value must be a non-negative number');
    });

    it('toString', () => {
        let instance = new PaymentPackage('Name', 100);
        let output = [
            'Package: Name',
            '- Value (excl. VAT): 100',
            `- Value (VAT 20%): ${100 * (1 + 20 / 100)}`
        ].join('\n');

        assert.equal(instance.toString(), output);
        
        instance.active = false;
        output = [
            'Package: Name (inactive)',
            '- Value (excl. VAT): 100',
            `- Value (VAT 20%): ${100 * (1 + 20 / 100)}`
        ].join('\n');

        assert.equal(instance.toString(), output);

        instance.VAT = 50;
        output = [
            'Package: Name (inactive)',
            '- Value (excl. VAT): 100',
            `- Value (VAT 50%): ${100 * (1 + 50 / 100)}`
        ].join('\n');

        assert.equal(instance.toString(), output);

        instance.name = 'bbb';
        output = [
            'Package: bbb (inactive)',
            '- Value (excl. VAT): 100',
            `- Value (VAT 50%): ${100 * (1 + 50 / 100)}`
        ].join('\n');

        assert.equal(instance.toString(), output);

        instance.value = 250;
        output = [
            'Package: bbb (inactive)',
            '- Value (excl. VAT): 250',
            `- Value (VAT 50%): ${250 * (1 + 50 / 100)}`
        ].join('\n');

        assert.equal(instance.toString(), output);
    });
});

